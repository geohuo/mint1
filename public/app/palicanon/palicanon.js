var _view = "community";
var main_tag = "";
var list_tag = new Array();
var currTagLevel0 = new Array();
var allTags = new Array();
var arrMyTerm = new Array();
var _listView="list";
var gBreadCrumbs=['','','','','','','','',''];
var _nextPageStart = 0;
var _pageSize = 20;

palicanon_load_term();

function community_onload() {
	$("span[tag]").click(function () {
		$(this).siblings().removeClass("select");
		$(this).addClass("select");
		main_tag = $(this).attr("tag");
		list_tag = new Array();
		tag_changed();
		render_tag_list();
	});

	$("#tag_input").keypress(function () {
		tag_render_others();
	});
    render_main_tag();
    render_tag_list();
    communityGetChapter();
    LoadAllChannel();
    LoadAllLanguage();
}

function palicanon_onload() {
	$("span[tag]").click(function () {
		$(this).siblings().removeClass("select");
		$(this).addClass("select");
		main_tag = $(this).attr("tag");
		list_tag = new Array();
		tag_changed();
		render_tag_list();
	});

	$("#tag_input").keypress(function () {
		tag_render_others();
	});
    render_main_tag();
}

function palicanon_load_term() {
    let lang =getCookie("language");
    switch (lang) {
        case 'zh-cn':
            lang = 'zh-hans';
            break;
        case 'zh-tw':
            lang = 'zh-hant';
            break;    
        case '':
            lang = 'en';
            break;
    }
	$.get(
		"/api/v2/terms",
		{
            view:'hot-meaning',
			language: lang,
		},
		function (data) {
			if (data.ok) {
				arrMyTerm = data.data.rows;
				render_main_tag();
			} else {
				alert(data.message);
			}
		}
	);
}

function render_main_tag() {
	$("#main_tag")
		.children()
		.each(function () {
			$(this).html(tag_get_local_word($(this).attr("tag")));
		});
}
function tag_changed() {
	let strTags = "";
	if (list_tag.length > 0) {
		strTags = main_tag + "," + list_tag.join();
	} else {
		strTags = main_tag;
	}
	console.log(strTags);
	let lang = getCookie("language");
    switch (lang) {
        case 'zh-cn':
            lang = 'zh-hans';
            break;
        case 'zh-tw':
            lang = 'zh-hant';
            break;    
        case '':
            lang = 'en';
            break;
    }
    switch (_view) {
        case "community":
            communityGetChapter(strTags,lang)
            break;
        case "category":
            palicanonGetChapter(strTags,lang)
            break;
        case "my":
            break;
        default:
            break;
    }
    
}
function communityGetChapter(strTags="",lang="",offset=0){
    next_page_loader_show();
    $.getJSON(
		"/api/v2/progress?view=chapter",
		{
			tags: strTags,
			lang: lang,
            offset: offset
		},
		function (data, status) {
            $("#info_bar_left").html(data.data.count+"个章节");
			let arrChapterData = data.data.rows;
			let arrChapterList = new Array();
			let html = "";
			allTags = new Array();
			let arrChapter = new Array();
			for (const iterator of arrChapterData) {
                arrChapterList.push({
                    book:iterator.book,
                    para:iterator.para,
                    level:2,
                    title:iterator.toc,
                    progress:{lang:'en',all_trans:iterator.progress},
                    tag:'',
                    trans_title:iterator.title,
                    channel_id:iterator.channel_id,
                    type:'article',
                    channel_info:iterator.channel,
                    path:JSON.parse(iterator.path),
                    views:iterator.views,
                    likes:iterator.likes,
                    tags:iterator.tags,
                    summary:iterator.summary,
                    created_at:iterator.created_at
                });
            }
			for (const iterator of arrChapterList) {
                arrChapter.push(iterator);
			}

			
            if(_nextPageStart==0){
                palicanon_chapter_list_apply(0);
                $("#list-1").html(render_chapter_list(arrChapter));
            }else{
                $("#list-1").append(render_chapter_list(arrChapter));
            }
            next_page_loader_hide();
		}
	);

    communityLoadChapterTag(strTags,lang);
}

function communityLoadChapterTag(strTags="",lang=""){
    $.getJSON(
		"/api/v2/progress?view=chapter-tag",
		{
			tags: strTags,
			lang: lang,
		},
		function (data, status) {
            let tagData = data.data.rows;
            allTags = new Array();
            let maxCount = tagData[0].count;
            for (const tag of tagData) {
                if(tag.count < maxCount){
                    allTags[tag.name] = tag.count;
                }
            }
			tag_render_others();

        });
}

function palitextGetChapter(strTags=""){
    $.getJSON(
		"/api/v2/palitext?view=chapter",
		{
			tags: strTags
		},
		function (data, status) {
			let arrChapterData = data.data.rows;
			let arrChapterList = new Array();
			let arrChapter = new Array();
            let lastParent = -1;
            for (let index = 0; index < arrChapterData.length; index++) {
                arrChapterData[index].children = new Array();
            }
			for (const it of arrChapterData) {
                if(arrChapterList.length==0){
                    arrChapterList.push(it);
                    continue;
                }
                if(lastParent>=0){
                    //判断是否为这个章节的子章节
                    if(arrChapterList[lastParent].book==it.book && arrChapterList[lastParent].paragraph == it.parent){
                        arrChapterList[lastParent].children.push(it)
                    }else{
                        arrChapterList.push(it);
                        lastParent = -1;
                    }
                }else{
                    //判断是否为最末尾章节的子章节
                    if(arrChapterList[arrChapterList.length-1].book==it.book && arrChapterList[arrChapterList.length-1].paragraph == it.parent){
                        lastParent = arrChapterList.length-1;
                        arrChapterList[arrChapterList.length-1].children.push(it);
                    }else{
                        arrChapterList.push(it);
                    }
                }
            }

			palicanon_chapter_list_apply(0);
			$("#list-1").html(render_chapter_list(arrChapterList));
            
		}
	);

    palitextLoadChapterTag(strTags);
}

function palitextLoadChapterTag(strTags=""){

    $.getJSON(
		"/api/v2/palitext?view=chapter-tag",
		{
			tags: strTags,
		},
		function (data, status) {
            let tagData = data.data.rows;
            allTags = new Array();
            let maxCount = tagData[0].count;
            for (const tag of tagData) {
                if(tag.count < maxCount){
                    allTags[tag.name] = tag.count;
                }
            }
			tag_render_others();

        });
}
function palicanonGetChapter(strTags,lang){
    palitextGetChapter(strTags);
}
function viewChanged(obj){

    _listView = $(obj).val();
    updateFirstListView();
}

function updateFirstListView(){
    if(_listView == "list"){
        $("#list_shell_1").removeClass("book_view");
        $("#list_shell_1").addClass("list_view");
    }else{
        $("#list_shell_1").addClass("book_view");
        $("#list_shell_1").removeClass("list_view");
    }
}

function palicanon_load_chapter(book, para, div_index = 1) {
	let lang = getCookie("language");
	if (lang == "zh-cn") {
		lang = "zh-hans";
	} else if (lang == "zh-tw") {
		lang = "zh-hant";
	} else if (lang == "") {
		lang = "en";
	}
	$.get(
		"../palicanon/get_chapter_info.php",
		{
			book: book,
			para: para,
			lang: lang,
		},
		function (data, status) {
			palicanon_chapter_list_apply(div_index);

			let arrChapterInfo = JSON.parse(data);
			let html = render_chapter_head(arrChapterInfo, div_index);
			$("#chapter_head_" + (parseInt(div_index) + 1)).html(html);

			let lang = getCookie("language");
			if (lang == "zh-cn") {
				lang = "zh-hans";
			} else if (lang == "zh-tw") {
				lang = "zh-hant";
			} else if (lang == "") {
				lang = "en";
			}
			$.get(
				"./get_chapter_children.php",
				{
					book: book,
					para: para,
					lang: lang,
				},
				function (data, status) {
					let arrChapterList = JSON.parse(data);
                    $("#list-" + (parseInt(div_index) + 1)).html(render_chapter_list(arrChapterList));
					
				}
			);

            //获取章节的channel列表
            loadChapterChannel({
                book:book,
                para:para,
                target:$("#chapter_head_" + (parseInt(div_index) + 1)).find('.progress').first()
            });
		}
	);
}

function render_chapter_head(chapter_info, parent) {
	let html = "";
	html = "<div class='chapter_head_tool_bar'>";
	html +=
		"<div><span class='chapter_back_button'  id='chapter_back_" +
		(parent + 1) +
		"' onclick=\"chapter_back('" +
		parent +
		"')\">back</span></div>";
	html +=
		"<div><button class='chapter_close_button' id='chapter_close_" +
		(parent + 1) +
		"' onclick=\"chapter_back('" +
		parent +
		"')\">⬅</button></div>";
	html += "</div>";
	let link = "../reader/?view=chapter&book=" + chapter_info.book + "&par=" + chapter_info.paragraph;
	html += "<div class='title'>";
    let sToc = chapter_info.toc;
    html += "	<div class='title_1'>";
	if (typeof chapter_info.trans_title == "undefined") {
        html += "<a href='" + link + "' target='_blank'>" ;
        if(sToc == ""){
            html += "[unnamed]" ;
        }else{
            switch (getCookie('language')) {
                case 'my':
                    html += roman_to_my(sToc);
                    break;
                case 'si':
                    html += roman_to_si(sToc);
                    break;        
                default:
                    html += sToc ;
                    break;
            }            
        }

        html += "</a>";
	} else {
        html += "<a href='" + link + "' target='_blank'>" + chapter_info.trans_title + "</a>";
	}
    html += "</div>";
	html += "<div class='title_2'>" + sToc + "</div>";
	html += "</div>";
	html += "<div class='res res_more'>";
	html += "<h2>译文</h2>";
	html += "<div class='progress' id='chapter_progress'>";
	if (chapter_info.progress && chapter_info.progress.length > 0) {
		let r = 12;
		let perimeter = 2 * Math.PI * r;
		for (const iterator of chapter_info.progress) {
			let stroke1 = parseInt(perimeter * iterator.all_trans);
			let stroke2 = perimeter - stroke1;
			html += '	<div class="item">';
			html += '<svg class="progress_circle" width="30" height="30" viewbox="0,0,30,30">';
			html += '<circle class="progress_bg" cx="15" cy="15" r="12" stroke-width="5"  fill="none"></circle>';
			html +=
				'<circle class="progress_color" cx="15" cy="15" r="12" stroke-width="5" fill="none"  stroke-dasharray="' +
				stroke1 +
				" " +
				stroke2 +
				'"></circle>';
			html += "</svg>";

			html += "<div class='lang'>" + iterator.lang + "-" + parseInt(iterator.all_trans * 100) + "%</div>";
			html += "	</div>";
		}
	} else {
		html += "无译文";
	}
	html += "</div>";

	html += "</div>";

	return html;
}

function render_chapter_list(chapterList) {
	let html = "";
	for (const iterator of chapterList) {
		html += palicanon_render_chapter_row(iterator);
	}
	return html;
}

function isChapterWithParent(list,item){

}

function palicanon_chapter_list_apply(div_index) {
	let iDiv = parseInt(div_index);
	let html = "";
	html += "<div id='chapter_head_" + (iDiv + 1) + "' class='chapter_head'></div>";

	html += "<ul id='list-" + (iDiv + 1) + "' class='grid' level='" + (iDiv + 1) + "'>";
	html += "</ul>";
    html += "<div id='more_chapter'>";
    html += '<div id="page_loader" class="lds-ellipsis" style="visibility: hidden;"><div></div><div></div><div></div><div></div></div>';
    html += "<div id='more_chapter_line'></div>";
	html += "<button id='btn_more_chapter' onclick='next_page()'>More</button>";
    html += "</div>";
	$("#list_shell_" + (iDiv + 1)).html(html);
	$("#list_shell_" + (iDiv + 1)).removeClass();
	$("#list_shell_" + (iDiv + 1)).addClass("show");
	

	//隐藏之后的列表
	for (let index = iDiv + 2; index <= 8; index++) {
		$("#list_shell_" + index).removeClass();
		$("#list_shell_" + index).addClass("hidden");
	}
	//收缩当前的
	$("#list-" + iDiv).removeClass();
	$("#list-" + iDiv).addClass("list");

	$("#list_shell_" + iDiv).removeClass();
	$("#list_shell_" + iDiv).addClass("list");

    updateFirstListView();
}

function next_page_loader_show(){
    $("#page_loader").css("visibility","visible");
}
function next_page_loader_hide(){
    $("#page_loader").css("visibility","hidden");
}
function next_page(){
    _nextPageStart += _pageSize;
    communityGetChapter(list_tag.join(),'zh',_nextPageStart);
}
function chapter_onclick(obj) {
    let objList = $(obj).parent().parent().parent().parent();
	let book = $(objList).attr("book");
	let para = $(objList).attr("para");
	let channel = $(objList).attr("channel");
	let type = $(objList).attr("type");
	let level =  parseInt($(objList).parent().attr("level"));
    let title1 = $(objList).find(".title_1").first().text();
    if(type=='article'){
        window.open("../article/index.php?view=chapter&book="+book+"&par="+para+"&channel="+channel,);
    }else{
        gBreadCrumbs[level] = {title1:title1,book:book,para:para,level:level};
        RenderBreadCrumbs();
        $(objList).siblings().removeClass("selected");
        $(objList).addClass("selected");
        $("#tag_list").slideUp();
        palicanon_load_chapter(book, para, level);
    }

}
function close_tag_list(){
    $("#tag_list").slideUp();
    $("#btn-filter").removeClass("active");

}
function renderProgress(progress=0,width=16,height=16){
        //绘制进度圈
    

		let r = 12;
		let perimeter = 2 * Math.PI * r;
		let stroke1 = parseInt(perimeter * progress);
		let stroke2 = perimeter - stroke1;
        let html="";
		html += '<svg class="progress_circle" width="16" height="16" viewbox="0,0,30,30">';
		html += '<circle class="progress_bg" cx="15" cy="15" r="12" stroke-width="5"  fill="none"></circle>';
		html +=
			'<circle class="progress_color" cx="15" cy="15" r="12" stroke-width="5" fill="none"  stroke-dasharray="' +
			stroke1 +
			" " +
			stroke2 +
			'"></circle>';
		html += "</svg>";
    return html;
    
}
function palicanon_render_chapter_row(chapter) {
	let html = "";
	let levelClass = "";
	if (chapter.level == 1) {
		//levelClass = " level_1";
	}
    let para=0;
    if(chapter.para){
        para=chapter.para;
    }else if(chapter.paragraph){
        para=chapter.paragraph;
    }
	html +='<li class="' + 	levelClass +'" book="' + chapter.book + '" para="' + para + '"';
    if(typeof chapter.type !== "undefined" && chapter.type==='article'){
        html += ' channel="' + chapter.channel_id + '" type="' + chapter.type + '"';
    }
    html += ' >';
    
	html += '<div class="main">';

	html += '<div class="left">';

    html += "<div class='left_items'>";



    if(typeof chapter.views != "undefined"){
        html += "<div class='left_item'>";        
        html += "<span class='item'>";
        html += "<svg class='small_icon' style='fill: var(--box-bg-color1)'>";
        html += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#eye'>";
        html += "</svg>" ;
        html += "<span class='text'>";
        html += chapter.views;
        html += "</span>";
        html += "</span>";
        html += "</div>"
    }

    if(typeof chapter.likes != "undefined"){
        html += "<div class='left_item'>";
        html += "<span class='item'>";
        html += "<svg class='small_icon' style='fill: var(--box-bg-color1)'>";
        html += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#heart'>";
        html += "</svg>" ;
        html += "<span class='text'>";
        html += chapter.likes;
        html += "</span>";
        html += "</span>";
        html += "</div>"
    }

    //完成度
    if(chapter.progress && chapter.progress.all_trans){
        html += "<div class='left_item'>";
        html += "<span class='item'>";
        html += renderProgress(chapter.progress.all_trans);
        html += "<span class='text'>";
        if(chapter.progress){
            html += parseInt(chapter.progress.all_trans*100+1)+"%";
        }else{
            html += "无";
        }
        html += "</span>";
        html += "</span>";
        html += "</div>"
    }


    html += "<div class='left_item'></div>"
    html += "</div>";//end of left_items

    html += "<div class='chapter_icon'>";
        html += '<span class="" style="margin-right: 1em;padding: 4px 0;">';
        html += "<svg class='icon' style='fill: var(--box-bg-color1)'>";
        if(typeof chapter.type !== "undefined" && chapter.type==='article'){
            html += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#journal-text'>";
        }else{
            if (chapter.level == 1) {
                html += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#journal'>";
            }else{
                html += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#folder2-open'>";
            }
        }
        html += "</svg>" ;
        html += "</span>";
    html += "</div>";
	html += '</div>';//end of left

	html += '<div class="right">';

	html += '<div class="head_bar">';

	html += '<div class="title" onclick="chapter_onclick(this)">';

    
    let sPaliTitle = chapter.title;
    if(chapter.title==""){
        sPaliTitle = "unnamed";
    }
	if (typeof chapter.trans_title == "undefined" ||  chapter.trans_title == "") {
		html += "	<div class='title_1'>" ;
        switch (getCookie('language')) {
            case 'my':
                html += roman_to_my(sPaliTitle);
                break;
            case 'si':
                html += roman_to_si(sPaliTitle);
                break;
            default:
                html += sPaliTitle ;
                break;
        }
        
        html += "</div>";
	} else {
		html += "	<div class='title_1'>" + chapter.trans_title + "</div>";
	}

	html += '<div class="title_2" lang="pali">' + sPaliTitle + "</div>";
	html += '<div class="title_2" lang="pali">';
//书名
    if(chapter.path){
        try{
            chapter.path = JSON.parse(chapter.path);
            if(chapter.path.length>0){
                html += "<span class='item'>";        
                html += "<svg class='small_icon' style='fill: var(--box-bg-color1)'>";
                html += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#journals'>";        
                html += "</svg>" ;
                html += chapter.path[0].title;
                html += "</span>";
            }
        }catch(e){
            console.error('json parse',chapter.path);
        }
    }
    html +=  "</div>";
	html += "</div>";

	html += '<div class="resource">';
    if(chapter.summary){
        html += chapter.summary;
    }

	html += "</div>";

    html += '<div class="more_info">';
    //最下面一栏，左侧的标签列表
    html += "<div class='chapter_tag'>";


    if(chapter.tags){
        html += renderChapterTags(chapter.tags);
    }
    
    html += "</div>";
    html += "<div class='palicanon_chapter_info'>"

    if(typeof chapter.type !== "undefined" && chapter.type==='article'){
        html += "<span class='item'>";
        html += "<svg class='small_icon' style='width:16px;height:16px;fill: var(--box-bg-color1)'>";
        html += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#person-circle'>";
        html += "</svg>" ;
        html += "<span class='text'>";        
        html += chapter.channel_info.name;
        html += "</span>";
        html += "</span>";
    }


    if(chapter.created_at){
        html += "<span class='item'>";
        html += "<svg class='small_icon' style='width:16px;height:16px;fill: var(--box-bg-color1)'>";
        html += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#clock'>";
        html += "</svg>" ;
        html += "<span class='text'>";
        html += getPassDataTime(new Date(chapter.created_at));
        html += "</span>";
        html += "</span>";

    }
    if(chapter.children && chapter.children.length>0){
        html += "<span class='item' onclick=\"subchapter_slideToggle(this)\">";
        html += "<span class='text'>";
        html += "展开折叠子章节 " + chapter.children.length;
        html += "</span>";
        html += "</span>";
    }    
    html += "</div>";
    html += "</div>";        

	html += "</div>";//end of head bar

	html += "</div>";

	html += "</div>";//end of main

	html += "<div class='subchapter'>";
    if(chapter.children){
        html += "<ul class='subchapter_inner'>";
        for (const subchapter of chapter.children) {
            html +=palicanon_render_chapter_row(subchapter);
        }
        html += "</ul>";
    }
	html += "</div>";
	html += "</li>";
	return html;
}

function subchapter_slideToggle(obj){
    $(obj).parent().parent().parent().parent().parent().siblings(".subchapter").slideToggle();
}
function tag_get_local_word(word) {
	let termKey = term_lookup_my(word, "", getCookie("userid"), getCookie("language"));
	if (typeof termKey == 'undefined' || termKey === false || termKey === '') {
        switch (getCookie('language')) {
            case 'my':
                return roman_to_my(word);
            case 'si':
                return roman_to_si(word);
            default:
                return word;
        }        
		
	} else {
        return termKey.meaning;
	}
}
function tag_render_others() {
	let strOthersTag = "";
	currTagLevel0 = new Array();
	$(".tag_others").html("");

	document.getElementById("main_tag").style.margin = 1 + "em";
	document.getElementById("main_tag").style.fontSize = 100 + "%";

	for (const key in allTags) {
		if (allTags.hasOwnProperty(key)) {
            let count = allTags[key]
			if ($("#tag_input").val().length > 0) {
				if (key.indexOf($("#tag_input").val()) >= 0) {
					strOthersTag =
						'<button class="canon-tag" onclick ="tag_click(\'' + key + "')\" >" + key + "("+count+ ")"+"</button>";
				}
			} else {
				let keyname = tag_get_local_word(key);
				strOthersTag =
					'<button class="canon-tag" title="' +
					key +
					'" onclick ="tag_click(\'' +
					key +
					"')\" >" +
					keyname + "("+count+ ")"+
					"</button>";
			}
			let thisLevel = 100;
			if (tag_level.hasOwnProperty(key)) {
				thisLevel = tag_level[key].level;
				if (tag_level[key].level == 0) {
					currTagLevel0[key] = 1;
				}
			}
			$(".tag_others[level='" + thisLevel + "']").html(
				$(".tag_others[level='" + thisLevel + "']").html() + strOthersTag
			);
		}
	}
}

function tag_click(tag) {
	list_tag.push(tag);
	render_tag_list();
	tag_changed();
}

function tag_set(tag) {
    if(Array.isArray(tag)){
        list_tag = tag;
    }else{
        list_tag = [tag];
    }
	_nextPageStart= 0;
	render_tag_list();
	tag_changed();
}

function renderChapterTags(tags){
    let html = "";
    for (const iterator of tags) {
		html += '<tag onclick="tag_set(\''+iterator.name+'\')">';
        html += "<svg class='small_icon' style='fill: var(--box-bg-color1)'>";
        html += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#tag'>";
        html += "</svg>" 
        html += '<span class="textt" title="' + iterator.name + '">' + tag_get_local_word(iterator.name) + "</span>";
		//html += '<span class="tag-delete" onclick ="tag_remove(\'' + iterator + "')\">✕</span>";
        html += "</tag>";
	}
    return html;
}

function render_tag_list() {
	//$("#tag_list").slideDown();

	let strListTag="";// = gLocal.gui.selected + "：";
    strListTag += "<button id='btn-filter' onclick=\"tag_list_slide_toggle(this)\">"
    strListTag += "<svg class='icon' style='fill: var(--box-bg-color1)'>";
    strListTag += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#filter'>";
    strListTag += "</svg>" ;
    strListTag += "</button>"
	for (const iterator of list_tag) {
		strListTag += '<tag>';
        strListTag += "<svg class='small_icon' style='fill: var(--box-bg-color1)'>";
        strListTag += "<use xlink:href='../../node_modules/bootstrap-icons/bootstrap-icons.svg#tag'>";
        strListTag += "</svg>" 
        strListTag += '<span class="textt" title="' + iterator + '">' + tag_get_local_word(iterator) + "</span>";
		strListTag += '<span class="tag-delete" onclick ="tag_remove(\'' + iterator + "')\">✕</span></tag>";
	}
	strListTag +="<div style='display:inline-block;width:20em;'>";
	//strListTag +="<input id='tag_input' type='input' placeholder='tag' size='20'  />";
	strListTag +="</div>";
	$("#tag_selected").html(strListTag);
}

function tag_remove(tag) {
	for (let i = 0; i < list_tag.length; i++) {
		if (list_tag[i] == tag) {
			list_tag.splice(i, 1);
		}
	}
	render_tag_list();
	tag_changed();
}

function sortNumber(a, b) {
	return b - a;
}

function tag_list_slide_toggle(element) {
	if ($("#tag_list").css("display") == 'none') {
		$(element).addClass("active");
	} else {
		$(element).removeClass("active");
	}
	$("#tag_list").slideToggle();
}
function chapter_back(parent) {
	let curr = parseInt(parent) + 1;
	let prt = parseInt(parent);
	//隐藏当前的
    for (let index = curr; index < 8; index++) {
	    $("#list_shell_" + index).removeClass();
	    $("#list_shell_" + index).addClass("hidden");        
        gBreadCrumbs[index-1]='';
    }

	//展开上一个
	$("#list-" + prt).removeClass();
	$("#list-" + prt).addClass("grid");

	$("#list_shell_" + prt).removeClass();
	$("#list_shell_" + prt).addClass("show");

    RenderBreadCrumbs();
}


function loadTagCategory(name="defualt"){
    $.getJSON("./category/"+name+".json",function(result){
        console.log(tocGetTagCategory(result));
        $("#tag-category").html("");
        $("#tag-category").fancytree({
            autoScroll: true,
            selectMode: 1, // 1:single, 2:multi, 3:multi-hier
            checkbox: false, // Show checkboxes.
            source: tocGetTagCategory(result),
            click: function(e, data) {
                    //tag_set([data.node.title]);
                },
            activate: function(e, data) {
//				alert("activate " + );
                //currSelectNode = data.node;
                tag_set(arrTagCategory[data.node.key]);
            },
            select: function(e, data) {
                // Display list of selected nodes
                currSelectNode = data.tree.getSelectedNodes();
                }
        });

  });

}

var arrTagCategory = new Array();
function tocGetTagCategory(data){
    let output = new Array();
    for (const iterator of data) {
        let item = {key:com_uuid(),title:iterator.name,tag:iterator.tag};
        arrTagCategory[item.key] = iterator.tag;
        if(typeof iterator.children !== "undefined"){
            item.children = tocGetTagCategory(iterator.children);
        }
        output.push(item);
    }
    return output;
}

function loadTagCategoryIndex(){
    $.getJSON("./category/index.json",function(result){
            let indexFilename = localStorage.getItem('palicanon_tag_category');
            if(!indexFilename){
                indexFilename = "defualt";
            }
        let html="";
        for (const iterator of result) {
            html += "<option ";
            if(indexFilename==iterator.file){
                html += " selected ";
            }
            html += " value='"+iterator.file+"'>"+iterator.name+"</option>";
        }
        $("#tag_category_index").html(html);
    });
}

function TagCategoryIndexchange(obj){
    localStorage.setItem('palicanon_tag_category',$(obj).val());
    //loadTagCategory($(obj).val());
     location.reload();
}

function RenderBreadCrumbs(){
    let html = "";
    html += '<a onclick="chapter_back(1)">home</a>';
    for (const iterator of gBreadCrumbs) {
        if(iterator.title1){
            html += " > ";
            html += '<a onclick="chapter_back('+(iterator.level+1)+')">';
            html += iterator.title1;
            html += '</a>';
        }
    }

    $("#bread-crumbs").html(html);
}

function LoadAllChannel(){
    $.getJSON(
		"/api/v2/progress?view=channel",
		{},
		function (data, status) {
            let html = "";
            html += "<ul>"
            for (const iterator of data.data.rows) {
                if(iterator.channel){
                    html += "<li>"
                    html += iterator.channel.name+"("+iterator.count+")";
                    html += "</li>"                    
                }

            }
            html += "</ul>";
            $("#filter-author").html(html);
        }
    );
}

function LoadAllLanguage(){
    $.getJSON(
		"/api/v2/progress?view=lang",
		{},
		function (data, status) {
            let html = "";
            html += "<ul>"
            for (const iterator of data.data.rows) {
                html += "<li>"
                html += iterator.lang+"("+iterator.count+")";
                html += "</li>"                    
            }
            html += "</ul>";
            $("#filter-lang").html(html);
        }
    );
}

function ReanderMainMenu(){
    let html ="";
    html += "<span ";
    if(_view=="community"){
        html += "class='select'";
    }
    html +="><a href='index1.php?view=community'>社区</a></span>";
    html += "<span ";
    if(_view=="category"){
        html += "class='select'";
    }
    html +="><a href='index1.php?view=category' >分类</a></span>";
    html += "<span ";
    if(_view=="my"){
        html += "class='select'";
    }
    html +="><a href='index1.php?view=my' >我的</a></span>";
    $("#main_menu").html(html);
}

function loadUserRecent(){
    $.getJSON(
        "/api/v2/view?view=user-recent", function() {
            console.log( "success" );
            }
    )
    .done(function(data) {
        let html = "";
        html += "<ol>";
        for (const item of data.data) {
            html += "<li>";
            html += item.title;
            html += "</li>";
        }
        html += "</ol>";
        $("#user_recent").find('.list').first().html(html);
    })
    .fail(function() {
        console.log( "error" );
    });
}

function loadContribution(){
    $.getJSON(
        "/api/v2/sent_history?view=contribution", function() {
            console.log( "success" );
            }
    )
    .done(function(data) {
        let html = "";
        html += "<ol>";
        for (const item of data.data) {
            html += "<li>";
            html += item.username.nickname;
            html += "—";
            html += item.count;
            html += "</li>";
        }
        html += "</ol>";
        $("#contribution").find('.list').first().html(html);
    })
    .fail(function() {
        console.log( "error" );
    });
}