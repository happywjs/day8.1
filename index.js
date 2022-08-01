
const fs = require("fs");

//读取
fs.readFile('./test','utf-8',(err,data)=>{
    if (err)return;
    fs.watchFile('test2',data,(err)=>{
        if (err)return;
        console.log("写入文件成功")

        //追加文件
        //fs.appendFile('追加文件路径'，"追加文件内容"，callback)
        var str = `春晓`
        fs.appendFile('./test1',str,(err)=>{
            if (err)return;
            console.log('追加文件成功');
            //删除文件
            //fs.unlink('删除文件路径'，callback)
            fs.unlink('./test',(err)=>{
                if (err)return;
                console.log("删除文件成功")
                //重命名文件
                //fs.rename("旧文件名称","重命名文件名称",callback)
                fs.rename('./test','./test_01',(err)=>{
                    if (err)return;
                    console.log("重命名文件成功");
                })
            })
        })
    })
})