/**
 * Created by mac on 16/9/24.
 */
/**
 * 此函数专门写出来用于处理树形结构,文件夹结构的数据
 * 我的数据 结构 是
 * id
 * pid  父级 id
 * name
 * type 是什么类型
 *
 * 数据操作标示 全部用id
 *
 */

var F_manageData ={
    //获取这个ID下面所有的子数据
    getChildById:function(arr,pid){
        var newArr =[];
        for(var i=0;i<arr.length;i++){
            if(arr[i].pid==pid){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    // 获取当前文件夹 所有的子集item
    getItChildsAll:function(data,CurentId){
        var arrB= F_manageData.getChildById(data,CurentId);
        if(arrB){

            arrB.map(function(item){
                Alldeleted.push(item);//把下面的自己全部拿出来
                F_manageData.getItChildsAll(data,item.idNumber);});
        }
    },
    //获取当前ID是处于第几层
    getLevelById:function(data,CurentId){
        var i =0;
        while (F_manageData.getItParents(data,CurentId)){
            i++;
            CurentId = F_manageData.getItParents(data,CurentId);
        }
        return i;
    },
    //这个元素下面 是否有 子元素?
    IfTherehasChild:function (data,hasChild) {
        var arr =[];
        for(var i=0;i<data.length;i++){
            if(data[i].pid==hasChild.id){
                arr.push(data[i]);
            }
        }

        return arr==[]?false:arr;
    },
    getItParents:function(data,find){
        var arr =null;
        for(var i=0;i<data.length;i++){
            console.log(i);
            console.log(data[i].idNumber+'按剩余的话说'+F_manageData.whereTheValue(data,find).pid);
            if(data[i].idNumber==F_manageData.WhoHasTheValue(data,find).pid){
                arr=data[i].idNumber;
                console.log('已找到父级'+arr);
            }
        }
        return arr==null?null:arr;
    },
    UpOrDown:function(data,attr,UpOrDown){
        var testData = F_manageData.extend(data);
        var temB =[];
                var temA =F_manageData.getItValueToSort(testData,attr);
                F_manageData.SortSort(temA,UpOrDown);

                temA.map(function(item){
                    F_manageData.getItObject(testData,attr,item,temB);

                });
                return temB;
    },//自制的排序函数
    /**
     * 排序 有 文件名排序,然后是文件大小排序,然后是创建时间排序
     * 我传入的就是当前 桌面上显示的  childs 然后呢?
     * 以文件名来排序 就是Title
     * Title
     * 然后是 把每一个东西的Title
     * 拿出来比较 比较完了之后再找到他的父对象 。。不过这样是不是有点过于复杂
     */
    getItObject:function (data,attr,value,Arr) {
        //通过属性值 找到 他是口那个对象
        console.log('我排完了顺序 开始找父对象'+value);
        //console.log(tem);
        for(var i =0 ;i<data.length;i++){
              if(data[i][attr]==value){
                  Arr.push(data[i]);
                 data.splice(i,1);
              }
        }
        // console.log(data);
    },//排序之后 取得 父对象
    getItValueToSort:function(data,attr){
        var temA = [];
        data.forEach(function (item) {
           // console.log('我这里正在取值value'+item);
            temA.push(item[attr]);
        });
        //console.log('我取完了所以data的属性值'+temA);
        return temA;
    },//取出排序用的属性
    SortSort:function(Array,UD){//改造了一个 数组排序函数
       // console.log('我开始排序'+Array);
        if(UD=='down'){
            Array.sort();
        }else{
            Array.sort();
            Array.reverse();
            }
    },//排序主函数
    extend:function (obj){//深度拷贝  用于 保护数据不被更改
        var newArr = obj.constructor === Array ? [] : {};
        for( var attr in obj ){
            if( typeof obj[attr] === "object"){
                newArr[attr] =F_manageData.extend(obj[attr]);
            }else{
                newArr[attr] = obj[attr];
            }
        }
        return newArr;
    },
    each:function(obj,callBack){
        for( var i = 0; i < obj.length; i++ ){
            callBack&&callBack(obj[i],i); // 找到 obj 类数组里面的元素   每一个 加一个 call
        }
    },
    ToogleArray:function(Array,value){

        var tem = F_manageData.whereTheValue(Array,value);
        tem=='meiyou'?Array.push(value):Array.splice(tem,1);
    },//再写一个数据处理函数 找数组里面是否有这个 如果有 就是返回他的位置
    whereTheValue:function(Array,value){//这里没有考虑数字相同的情况
        var tem = 'meiyou';
        for(var i=0;i<Array.length;i++){
            if(Array[i]==value){
                tem=i;
            }
        }
        console.log('我要删除的位置'+tem);
        return tem;

    },
    WhoHasTheValue:function(data,id){
        var temObj = null;
        for(var i=0;i<data.length;i++){
            if(data[i].idNumber==id){
            temObj=data[i];
            }
        }
        console.log(temObj);
        return temObj;
    }


};