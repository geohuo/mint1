var _commit_data;
var previewWin;
var sentData;

function commit_init(param) {
	previewWin = model_win_init({ container: "model_win" });
	_commit_data = param;

	previewWin.show(commit_preview_render());
}
function commit_render_head(step) {
	let html = "";
	html += "<div class='commit_head step" + step + "'>";
	html += "<div class='commit_step commit_step_1'><div class='num'>1</div><div>选择版本</div></div>";
	html += "<div class='commit_step commit_step_2'><div class='num'>2</div><div>文本比对</div></div>";
	html += "<div class='commit_step commit_step_3'><div class='num'>3</div><div>完成</div></div>";
	html += "</div>";
	return html;
}
function commit_render_channel_select() {
	let html = "";
	html += "<div class='commit_win_inner' >";
	html += commit_render_head(1);
	html += "<div style='display:flex;'>";
	html += "<div>译文来源:";
	html += "<select id='src_channel' onchange='src_change(this)'>";
	if (typeof _commit_data.src == "undefined") {
		let lastSrc = localStorage.getItem("commit_last_src");
		if (typeof lastSrc == "undefined") {
			html += "<option value='' selected>请选择当前版本</option>";
		} else {
			_commit_data.src = lastSrc;
		}
	}
	for (const iterator of _my_channal) {
		if (iterator.status > 0) {
			html += "<option value='" + iterator.id + "' ";
			if (_commit_data.src == iterator.id) {
				html += " selected ";
			}
			html += ">" + iterator.name + "-";
			if (iterator.power >= 30) {
				html += gLocal.gui.your;
			} else if (iterator.power >= 20) {
				html += "可编辑";
			} else {
				html += "只读";
			}
			html += "</option>";
		}
	}
	html += "</select>";

	html += "</div>";
	html += "<div>==></div>";
	html += "<div>目标译文:";
	html += "<select id='dest_channel' onchange='dest_change(this)'>";
	if (typeof _commit_data.dest == "undefined") {
		let lastDest = localStorage.getItem("commit_src_" + _commit_data.src);
		if (typeof lastDest == "undefined") {
			html += "<option value='' selected>请选择目标版本</option>";
		} else {
			_commit_data.dest = lastDest;
		}
	}
	for (const iterator of _my_channal) {
		if (iterator.status > 0) {
			html += "<option value='" + iterator.id + "' ";
			if (_commit_data.dest == iterator.id) {
				html += " selected ";
			}
			if (typeof _commit_data.src != "undefined" && _commit_data.src == iterator.id) {
				html += "style:'display:none;' ";
			}
			html += " >" + iterator.name + "-";
			if (iterator.power >= 30) {
				html += gLocal.gui.your;
			} else if (iterator.power >= 20) {
				html += "可编辑";
			} else if (iterator.power >= 10) {
				html += "只读";
			} else {
				html += "停用";
			}
			html += "</option>";
		}
	}
	html += "</select>";
	html += "</div>";

	html += "<div id='commit_preview'>";
	if (typeof _commit_data.express != "undefined" && _commit_data.express == true) {
		if (typeof _commit_data.sent != "undefined" && _commit_data.sent.length != 0) {
			html += "<button onclick='commit_pull()'>推送</button>";
		} else {
			html += "没有句子数据";
		}
	} else {
		html += "<button onclick='previewWin.show(commit_preview_render())'>文本比对</button>";
	}

	html += "</div>";
	html += "</div>";

	html += "</div>";
	return html;
}

function commit_preview_render() {
	let html = "";
	html += "<div class='commit_win_inner'>";
	html += commit_render_head(2);

	if (
		typeof _commit_data.src != "undefined" &&
		_commit_data.src != null &&
		_commit_data.src != "" &&
		typeof _commit_data.dest != "undefined" &&
		_commit_data.dest != null &&
		_commit_data.dest != ""
	) {
		if (typeof _commit_data.sent == "undefined" || _commit_data.sent.length == 0) {
			let sentList = new Array();
			for (const iterator of _arrData) {
				sentList.push(iterator.book + "-" + iterator.para + "-" + iterator.begin + "-" + iterator.end);
			}
			_commit_data.sent = sentList;
		}

		let arrSentInfo = new Array();
		for (const iterator of _commit_data.sent) {
			let id = com_guid();
			arrSentInfo.push({ id: id, data: iterator });
		}

		if (arrSentInfo.length > 0) {
			let setting = new Object();
			setting.lang = "";
			setting.channal = _commit_data.src + "," + _commit_data.dest;
			$.post(
				"../term/note.php",
				{
					setting: JSON.stringify(setting),
					data: JSON.stringify(arrSentInfo),
				},
				function (data, status) {
					if (status == "success") {
						try {
							sentData = JSON.parse(data);
						} catch (e) {}

						previewWin.show(commit_render_comp(0));
					}
				}
			);
			html += "加载中 请稍等……";
			html += "</div>";
			return html;
		} else {
			html += "没有句子被选择";
			html += "</div>";
			return html;
		}
	} else {
		return commit_render_channel_select();
	}
}
function commit_compare_mode_change(obj) {
	previewWin.show(commit_render_comp(parseInt($(obj).val())));
}
function commit_render_comp(mode) {
	let html = "";
	html += "<div class='commit_win_inner'>";
	html += commit_render_head(2);
	html += "<div>";
	html += "<button onclick='previewWin.show(commit_render_channel_select())'>返回</button>";
	html += "<button onclick='commit_pull()'>推送</button>";
	html += "<button onclick='commit_close()'>放弃</button>";
	html += "</div>";
	html += "<div class='commit_compare'>";
	html += "<div >";
	html += "<select onchange='commit_compare_mode_change(this)'>";
	let compareMode = [
		{ id: 0, string: "自动" },
		{ id: 1, string: "全选" },
		{ id: 2, string: "全不选" },
	];
	for (const iterator of compareMode) {
		html += "<option value='" + iterator.id + "' ";
		if (mode == iterator.id) {
			html += " selected ";
		}
		html += ">" + iterator.string + "</option>";
	}
	html += "</select>";
	html += "</div>";
	html += "<div class='pali'>巴利原文</div>";
	html += "<div class='src_text'>当前版本：" + channal_getById(_commit_data.src).name + "</div>";
	html += "<div class='dest_text'>推送到：" + channal_getById(_commit_data.dest).name + "</div>";
	html += "</div>";

	let textCount = 0;
	for (const iterator of sentData) {
		if (iterator.translation[0].text != iterator.translation[1].text) {
			textCount++;
			if (iterator.translation[0].id != "") {
				html += "<div class='commit_compare'>";
				html += "<div ><input class='sent_checkbox' type='checkbox' ";
				switch (mode) {
					case 0:
						if (iterator.translation[1].id == "") {
							html += " checked ";
						} else {
							if (iterator.translation[0].update_time > iterator.translation[1].update_time) {
								html += " checked ";
							}
						}
						break;
					case 1:
						html += " checked ";
						break;
					case 2:
						break;
					default:
						break;
				}
				html += " sent_id='" + iterator.pali_sent_id;
				html += "' onclick='commit_sent_select(this)' /></div>";
				html += "<div class='pali'>" + iterator.palitext + "</div>";
				html += "<div class='src_text'>";
				html += iterator.translation[0].text;
				html += "</div>";
				html += "<div ";
				html += "channel='" + _commit_data.dest + "'";
				html += "sent_id='" + iterator.pali_sent_id + "'";
				html += " class='dest_text'>";
				switch (mode) {
					case 0:
						if (iterator.translation[1].id == "") {
							html += "<ins>" + iterator.translation[0].text + "</ins>";
						} else {
							if (iterator.translation[0].update_time > iterator.translation[1].update_time) {
								html += "<del>" + iterator.translation[1].text + "</del><br>";
								html += "<ins>" + iterator.translation[0].text + "</ins>";
							} else {
								html += "[新]" + iterator.translation[1].text;
							}
						}
						break;
					case 1:
						html += "<del>" + iterator.translation[1].text + "</del><br>";
						html += "<ins>" + iterator.translation[0].text + "</ins>";
						break;
					case 2:
						html += iterator.translation[1].text;
						break;
				}

				html += "</div>";
				html += "</div>";
			}
		}
	}
	if (textCount == 0) {
		html += "译文全部相同，无需推送。";
	}
	html += "</div>";
	return html;
}

function commit_sent_select(obj) {
	let sent_id = $(obj).attr("sent_id");
	for (const iterator of sentData) {
		if (iterator.pali_sent_id == sent_id) {
			let html = "";
			if (obj.checked) {
				if (iterator.translation[1].id != "") {
					html += "<del>" + iterator.translation[1].text + "</del><br>";
				}
				html += "<ins>" + iterator.translation[0].text + "</ins>";
			} else {
				html += iterator.translation[1].text;
			}
			$(".dest_text[sent_id='" + sent_id + "']").html(html);
		}
	}
}

function commit_render_final(result) {
	let html = "";
	html += "<div class='commit_win_inner'>";
	html += commit_render_head(3);
	if (typeof result.update != "undefined") {
		html += "<div>修改：" + result.update + "</div>";
	}
	if (typeof result.insert != "undefined") {
		html += "<div>新增：" + result.insert + "</div>";
	}
	if (typeof result.pr != "undefined") {
		html += "<div>提交修改建议：" + result.pr + "</div>";
	}
	html +=
		"<div><a href='' onclick='window.reload()'>刷新页面</a>查看修改结果。<a onclick='previewWin.close()'>关闭</a></div>";
	html += "</div>";
	return html;
}
function commit_pull() {
	localStorage.setItem("commit_src_" + _commit_data.src, _commit_data.dest);
	$.post(
		"../commit/commit.php",
		{
			data: JSON.stringify(_commit_data),
		},
		function (data, status) {
			if (status == "success") {
				let html = "";
				try {
					let result = JSON.parse(data);
					if (result.status == 0) {
						previewWin.show(commit_render_final(result));
					} else {
						alert(result.message);
					}
				} catch (e) {}
			}
		}
	);
}
function commit_close() {}
function dest_change(obj) {
	_commit_data.dest = $(obj).val();
	localStorage.setItem("commit_src_" + _commit_data.src, _commit_data.dest);
}
function src_change(obj) {
	_commit_data.src = $(obj).val();
	localStorage.setItem("commit_last_src", _commit_data.src);
}
