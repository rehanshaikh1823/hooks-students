var hwp=require('html-webpack-plugin');

var bootStrapHtmlPage=new hwp({
  template:'src/index.html'
});
var myModule={
     module:{
         rules:[
             {
                 test:/\.js$/,
                 exclude:/node_modules/,
                 loader:['babel-loader']
             },
             {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            }
         ]
     },
     plugins:[bootStrapHtmlPage]
}


module.exports=myModule;