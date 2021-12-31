<?php 
#目录设置，不能更改
require_once __DIR__."/dir.php";

#域名设置
define("WWW_DOMAIN_PROTOCOL","https");
define("WWW_DOMAIN_NAME","www.wikipali.org");
define("RPC_DOMAIN_NAME","rpc.wikipali.org");
/*
电子邮件设置
PHPMailer
*/
define("Email", [
				 "Host"=>"smtp.gmail.com",//Set the SMTP server to send through
				 "SMTPAuth"=>true,//Enable SMTP authentication
				 "Username"=>'your@gmail.com',//SMTP username
				 "Password"=>'your_password',//SMTP password
				 "Port"=>465,//TCP port to connect to 465; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
				 "From"=>"your@gmail.com",
				 "Sender"=>"sender"
				 ]);

/*
数据库设置
*/
define("Database",[
	"type"=>"pgsql",
	"server"=>"localhost",
	"port"=>5432,
	"name"=>"mint",
	"sslmode" => "disable",
	"user" => "postgres",
	"password" => "123456"
]);

define("_DB_ENGIN_", Database["type"]);
define("_DB_HOST_", Database["server"]);
define("_DB_PORT_", Database["port"]);
define("_DB_NAME_", Database["name"]);
define("_DB_USERNAME_", Database["user"]);
define("_DB_PASSWORD_", Database["password"]);


/*
Redis 设置，
使用集群
*/
define("Redis",[
	"hosts" => ["127.0.0.1:6376", "127.0.0.1:6377", "127.0.0.1:6378"],
	"password" => "",
	"db" => 0,
	"prefix"=>"aaa://"
]);
				
# 雪花id
define("SnowFlake",[
	"DatacenterId"=>1,
	"WorkerId"=>1
]);
/*
数据表
*/
#表设置，此行不能更改
require_once __DIR__."/table.php";

/*
前缀：
Sqlite:  _SQLITE_
PostgreSql:  _PG_
*/
//语料库数据表 pali canon db file 
/*
巴利语料模版表
运行app/install/db_insert_templet.php 刷库
*/

define("_FILE_DB_PALICANON_TEMPLET_", _PG_DB_PALICANON_TEMPLET_);
define("_TABLE_PALICANON_TEMPLET_",_PG_TABLE_PALICANON_TEMPLET_);

/*
标题资源表
app/install/db_update_toc.php 刷库
*/

define("_FILE_DB_RESRES_INDEX_", _PG_DB_RESRES_INDEX_);
define("_TABLE_RES_INDEX_",_PG_TABLE_RES_INDEX_);

/*
巴利语料段落表
刷库 app/install/db_insert_palitext.php
更新 app/install/db_update_palitext.php
*/

define("_FILE_DB_PALITEXT_", _PG_DB_PALITEXT_);
define("_TABLE_PALI_TEXT_",_PG_TABLE_PALI_TEXT_);
define("_TABLE_PALI_BOOK_NAME_",_PG_TABLE_PALI_BOOK_NAME_);

#单词表部分
/*
以书为单位的单词汇总表
填充 /app/install/db_insert_bookword_from_csv.php
*/

define("_FILE_DB_BOOK_WORD_", _PG_DB_BOOK_WORD_);
define("_TABLE_BOOK_WORD_", _PG_TABLE_BOOK_WORD_);

/*
单词索引
/app/install/db_insert_word_from_csv.php
/app/admin/word_index_weight_refresh.php
*/

define("_FILE_DB_PALI_INDEX_", _PG_DB_PALI_INDEX_);
define("_TABLE_WORD_", _PG_TABLE_WORD_);

/*
92万词
/app/install/db_insert_wordindex_from_csv.php
*/

define("_FILE_DB_WORD_INDEX_", _PG_DB_WORD_INDEX_);
define("_TABLE_WORD_INDEX_", _PG_TABLE_WORD_INDEX_);

//单词索引=92万词+单词索引

//PostgreSQL
define("_FILE_DB_INDEX_", _PG_DB_INDEX_);

//黑体字数据表
//sqlite
define("_FILE_DB_BOLD_", "sqlite:" . _SQLITE_DB_BOLD_);
define("_TABLE_WORD_BOLD_", _SQLITE_TABLE_WORD_BOLD_);

/*
单词分析表
数据迁移： php /deploy/migaration/word_statistics.php
*/

define("_FILE_DB_STATISTICS_", _PG_DB_STATISTICS_);
define("_TABLE_WORD_STATISTICS_", _PG_TABLE_WORD_STATISTICS_);


/*
巴利句子表
数据迁移： php ./deploy/migaration/20211125155700_pali_sent_org.php
数据迁移： php ./deploy/migaration/20211125165700-pali_sent-upgrade.php
数据迁移： php ./deploy/migaration/20211126220400-pali_sent_index-upgrade.php

*/

define("_FILE_DB_PALI_SENTENCE_", _PG_DB_PALI_SENTENCE_);
define("_TABLE_PALI_SENT_", _PG_TABLE_PALI_SENT_);
define("_TABLE_PALI_SENT_ORG_", _PG_TABLE_PALI_SENT_);
define("_TABLE_PALI_SENT_INDEX_", _PG_TABLE_PALI_SENT_);

/*
相似句
数据迁移 
php ./deploy/migaration/20211127214800_sent_sim.php
php ./deploy/migaration/20211127214900-sent_sim_index.php
redis: 
php ./app/pali_sent/redis_upgrade_pali_sent.php
*/

define("_FILE_DB_PALI_SENTENCE_SIM_", _PG_DB_PALI_SENTENCE_SIM_);
define("_TABLE_SENT_SIM_", _PG_TABLE_SENT_SIM_);
define("_TABLE_SENT_SIM_INDEX_", _PG_TABLE_SENT_SIM_INDEX_);

/*
完成度
数据迁移
php ./app/upgrade/upgrade_pali_toc.php
*/

define("_FILE_DB_PALI_TOC_", _PG_DB_PALI_TOC_);
define("_TABLE_PROGRESS_", _PG_TABLE_PROGRESS_);
define("_TABLE_PROGRESS_CHAPTER_", _PG_TABLE_PROGRESS_CHAPTER_);


//页码对应
//sqlite
define("_FILE_DB_PAGE_INDEX_", "sqlite:" . __DIR__ . "/../tmp/appdata/palicanon/pagemap.db3");

//PostgreSQL
//define("_FILE_DB_PAGE_INDEX_", _DB_ENGIN_.":host="._DB_HOST_.";port="._DB_PORT_.";dbname="._DB_NAME_.";user="._DB_USERNAME_.";password="._DB_PASSWORD_.";");


# 字典数据表 全部存入redis


#参考字典
//define("_FILE_DB_REF_", _DB_ENGIN_.":host="._DB_HOST_.";port="._DB_PORT_.";dbname="._DB_NAME_.";user="._DB_USERNAME_.";password="._DB_PASSWORD_.";");
define("_FILE_DB_REF_", "sqlite:" . __DIR__ . "/../tmp/appdata/dict/system/ref.db");
define("_TABLE_DICT_REF_", "dict");
define("_TABLE_DICT_REF_NAME_LIST_", "info");

#参考字典索引
//define("_FILE_DB_REF_INDEX_", _DB_ENGIN_.":host="._DB_HOST_.";port="._DB_PORT_.";dbname="._DB_NAME_.";user="._DB_USERNAME_.";password="._DB_PASSWORD_.";");
define("_FILE_DB_REF_INDEX_", "sqlite:" . __DIR__ . "/../tmp/appdata/dict/system/ref1.db");
define("_TABLE_REF_INDEX_", "dict");


# 用户数据表

#sqlite
define("_FILE_DB_USER_WBW_", _SQLITE_DB_USER_WBW_);
define("_TABLE_SRC_USER_WBW_", _SQLITE_TABLE_SRC_USER_WBW_);
define("_TABLE_SRC_USER_WBW_BLOCK_", _SQLITE_TABLE_SRC_USER_WBW_BLOCK_);


# 译文
#sqlite
define("_FILE_DB_SENTENCE_", _SQLITE_DB_SENTENCE_);
define("_TABLE_SENTENCE_", _SQLITE_TABLE_SENTENCE_);
define("_TABLE_SENTENCE_BLOCK_", _SQLITE_TABLE_SENTENCE_BLOCK_);
define("_TABLE_SENTENCE_PR_", _SQLITE_TABLE_SENTENCE_PR_);


# 译文编辑历史
#sqlite
define("_FILE_DB_USER_SENTENCE_HISTORAY_", _SQLITE_DB_USER_SENTENCE_HISTORAY_);
define("_TABLE_SENTENCE_HISTORAY_", _SQLITE_TABLE_SENTENCE_HISTORAY_);


# 逐词解析字典
# sqlite
define("_FILE_DB_WBW_", _SQLITE_DB_WBW_);
define("_TABLE_DICT_WBW_", _SQLITE_TABLE_DICT_WBW_);
define("_TABLE_DICT_WBW_INDEX_", _SQLITE_TABLE_DICT_WBW_INDEX_);


//写入频繁 读取不频繁
# 用户行为记录
#sqlite
define("_FILE_DB_USER_ACTIVE_", _SQLITE_DB_USER_ACTIVE_);
define("_TABLE_USER_OPERATION_DAILY_", _SQLITE_TABLE_USER_OPERATION_DAILY_);
define("_TABLE_USER_OPERATION_FRAME_", _SQLITE_TABLE_USER_OPERATION_FRAME_);


#sqlite
define("_FILE_DB_USER_ACTIVE_LOG_", _SQLITE_DB_USER_ACTIVE_LOG_);
define("_TABLE_USER_OPERATION_LOG_", _SQLITE_TABLE_USER_OPERATION_LOG_);


//读取频繁 写入不频繁 
# 用户账号
#sqlite
define("_FILE_DB_USERINFO_", _SQLITE_DB_USERINFO_);
define("_TABLE_USER_INFO_", _SQLITE_TABLE_USER_INFO_);


# 版本风格 
#sqlite
define("_FILE_DB_CHANNAL_", _SQLITE_DB_CHANNAL_);
define("_TABLE_CHANNEL_", _SQLITE_TABLE_CHANNEL_);


# 文章 文集

define("_FILE_DB_USER_ARTICLE_", _SQLITE_DB_USER_ARTICLE_);
define("_TABLE_ARTICLE_", _SQLITE_TABLE_ARTICLE_);
define("_TABLE_COLLECTION_", _SQLITE_TABLE_COLLECTION_);
define("_TABLE_ARTICLE_COLLECTION_", _SQLITE_TABLE_ARTICLE_COLLECTION_);



# 术语
define("_FILE_DB_TERM_", "sqlite:" . __DIR__ . "/../tmp/user/dhammaterm.db");

# 协作
define("_FILE_DB_USER_SHARE_", "sqlite:" . __DIR__ . "/../tmp/user/share.db3");

# 工作组
define("_FILE_DB_GROUP_", "sqlite:" . __DIR__ . "/../tmp/user/group.db3");

# 逐词解析文件索引
define("_FILE_DB_FILEINDEX_", "sqlite:" . __DIR__ . "/../tmp/user/fileindex.db");

# 课程
define("_FILE_DB_COURSE_", "sqlite:" . __DIR__ . "/../tmp/user/course.db3");
define("_TABLE_COURSE_","course");

# 用户自定义书
define("_FILE_DB_USER_CUSTOM_BOOK_", "sqlite:" . __DIR__ . "/../tmp/user/custom_book.db3");

# 逐词译和译文编辑消息 无需迁移数据
define("_FILE_DB_MESSAGE_", "sqlite:" . __DIR__ . "/../tmp/user/message.db");

#点赞
define("_FILE_DB_LIKE_", "sqlite:" . __DIR__ . "/../tmp/user/like.db3");


//很少使用
# 网站设置
//define("_FILE_DB_HOSTSETTING_", _DB_ENGIN_.":host="._DB_HOST_.";port="._DB_PORT_.";dbname="._DB_NAME_.";user="._DB_USERNAME_.";password="._DB_PASSWORD_.";");
define("_FILE_DB_HOSTSETTING_", "sqlite:" . __DIR__ . "/../tmp/user/hostsetting.db3");


# 用户字典统计数据 刷库
//define("_FILE_DB_USER_DICT_", _DB_ENGIN_.":host="._DB_HOST_.";port="._DB_PORT_.";dbname="._DB_NAME_.";user="._DB_USERNAME_.";password="._DB_PASSWORD_.";");
define("_FILE_DB_USER_DICT_", "sqlite:" . __DIR__ . "/../tmp/user/udict.db3");


# 用户图片数据 尚未启用
//define("_FILE_DB_MEDIA_", _DB_ENGIN_.":host="._DB_HOST_.";port="._DB_PORT_.";dbname="._DB_NAME_.";user="._DB_USERNAME_.";password="._DB_PASSWORD_.";");
define("_FILE_DB_MEDIA_", "sqlite:" . __DIR__ . "/../tmp/user/media.db3");


#权限管理 casbin使用
//define("_FILE_DB_USER_RBAC_", _DB_ENGIN_.":host="._DB_HOST_.";port="._DB_PORT_.";dbname="._DB_NAME_.";user="._DB_USERNAME_.";password="._DB_PASSWORD_.";");
define("_FILE_DB_USER_RBAC_",  __DIR__ . "/../tmp/user/rbac.db3");


# 全文搜索
define("_TABLE_FTS_", "fts_texts");


?>