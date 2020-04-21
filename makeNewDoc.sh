#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

lang=$1
# 进入文件夹

cd docs${lang}/javascript

# 判断目录是不是已经存在，如果不存在则创建，存在则输出“dir exist”
dirname=$2

filename=$3

echo "the dir name is $dirname"

#    判断文件是否存在
if [ ! -f $filename ]; then
    touch ${dirname}/${filename}.md
else
    echo file exist, please make a new file
fi
