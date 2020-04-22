#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

lang=$1

dirname=$2

filename=$3
# 进入文件夹

cd docs${lang}/javascript

pwd

echo "the dir name is $dirname"

#    判断文件是否存在
if [[ ! -f ${dirname}/"$filename.md" ]]; then
    touch ${dirname}/"$filename".md
else
    echo file exist, please make a new file
fi
