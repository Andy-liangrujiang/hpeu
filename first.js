var name = "walker";
function sum (a, b) {
  return a+b;
};

sum(1, 2);
sum(2, 3);
//  git init    初始化

//  git config --global user.name
//  git config --global user.email

//  git diff    查看工作区和版本库之间的差异
//  git status   查看状态

// git add 文件名  (-A  --all) 全部添加的参数
// git commit -m "提交的相关信息"

//  假设，我先在感觉前一个提交的文件，有误, 想撤回
//  首先查看历史记录
//  git log 来看
//  git reset --hard 提交id
//  查看ref记录
