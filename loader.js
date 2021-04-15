"use strict";

"use strict";

const _fs = require("fs");
const _path = require("path");

const pwdDir = _path.resolve(__dirname);
const publicDir = _path.resolve(__dirname, "../").normalize();

const processMarkdownFile = function (dir, hook) {
    _fs.readdirSync(dir).forEach(function (filename) {
        const item = _path.join(dir, filename);
        const stat = _fs.statSync(item);
        const basename = _path.basename(item)
        // 如果是 ‘.‘ 开头的文件 则认为是隐藏文件， 跳过
        if (basename.indexOf("/.") !== -1) {
            return;
        }
        if (stat.isFile() && filename.toLocaleLowerCase().endsWith(".md")) {
            const data = _fs.readFileSync(item, "utf-8");
            if(data && data.trim()!==""){
                hook(item, stat, data);
            }
        } else if (stat.isDirectory()) {
            processMarkdownFile(item, hook);
        }
    });
};

const load = function (dir) {
    const blogs = [];
    processMarkdownFile(dir, function (path, stat, content) {
        const filePath = path.replace(/\\/g, "/").substr(publicDir.length);
        const fileFullName = _path.basename(filePath);
        const fileName = fileFullName.substr(0, fileFullName.lastIndexOf("."));
        if (stat.size <= 0) {
            return;
        }
        // 如果是 README.md 文件， 跳过
        if (fileFullName.toUpperCase() === "README.MD") {
            return;
        }
        // console.log(stat);
        const blog = {
            __basedir: dir.substr(publicDir.length),
            title: fileName,
            created: stat.birthtime,
            updated: stat.mtime,
            size: stat.size,
            file: filePath,
            content: content
        };
        blogs.push(blog);
    });
    // console.log(JSON.stringify(blogs, null, 2));
    return blogs;
};

const blogs = load(pwdDir + "/articles")
const items = load(pwdDir + "/iqaa")

module.exports = {
    blogs, items
}