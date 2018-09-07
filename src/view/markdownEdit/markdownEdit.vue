<template>
  <div class="hello"
    v-loading="loading"
    :element-loading-text="textWorld">
    <h1>小程序文档编辑系统</h1>
    <el-row>
      <el-container>
        <el-aside width="350px">
           <div style="padding:20px 0;">
             <el-tree class="tree-style"
                    :data="treeData"
                    node-key="label"
                    @node-click="handleNodeClick"
                    highlight-current>
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                        <span>{{ node.label }}</span>
                        <span>
                        <el-button
                            v-if="data.children"
                            type="text"
                            size="mini"
                            @click.stop="() => append(data)">
                            <i class="el-icon-circle-plus-outline"></i>新增
                        </el-button>
                        <el-button
                            v-else
                            type="text"
                            size="mini"
                            @click="() => remove(node, data)">
                            <i class="el-icon-remove-outline"></i>删除
                        </el-button>
                        </span>
                    </span>
                </el-tree>
           </div>
        </el-aside>
        <el-main>
          <mavon-editor 
            ref=md 
            @imgAdd="imgAdd" 
            @save="saveNew" 
            v-model="value"/>
        </el-main>
      </el-container>
    </el-row>
    <el-dialog title="新增文档" width="30%" center :visible.sync="dialogFormVisible">
      <el-form >
        <el-form-item label="文档英文名称">
          <el-input v-model="newFileName"  auto-complete="off" placeholder="请输入文档英文名称"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitNew">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
let id = 1000;
export default {
  name: 'HelloWorld',
  data () {
    return {
      loading:true,
      textWorld:'数据加载中',
      value: '',
      treeData : [],
      dialogFormVisible: false,
      newurl:'',
      newFileName:''
    }
  },
  methods: {
    getDir(){
      this.axios.get('/api/getDir')
      .then((response) => {
          console.log(response);
        this.treeData = response.data.data;
        this.value = '';
        this.dialogFormVisible = false;
        this.loading = false;
      })
      .catch((error) => {
          console.log(error);
          this.loading = false;
      });
    },
    append(data) {
      console.log(data);
      this.newFileName = '';
      this.dialogFormVisible = true;
      this.newurl =  data.label;
    },
    submitNew() {
      this.loading = true;
      this.textWorld = '文件新增中';
      this.axios.post('/api/addNewMarkdown',{url:'/' + this.newurl +'/' + this.newFileName +'.md'})
        .then((response) => {
          console.log(response);
          if(response.status !== 200) throw new Error(response.data);
          this.getDir();
          // const newChild = { id: id++, label: 'testtest', children: [] };
          // if (!data.children) {
          //     this.$set(data, 'children', []);
          // }
          // data.children.push(newChild);
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        })
          .catch( (error) => {
            this.loading = false;
            this.dialogFormVisible = false;
            this.$message.error('新增失败：'+error.message);
          });
    },
    remove(node, data) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.loading = true;
          this.textWorld = '文件删除中';
          this.axios.post('/api/removeMarkdown',{url:this.url})
            .then((response) => {
              if(response.status !== 200) return;
              this.getDir();
              // const parent = node.parent;
              // const children = parent.data.children || parent.data;
              // const index = children.findIndex(d => d.label === data.label);
              // children.splice(index, 1);
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            })
              .catch((error) => {
                this.loading = false;
                  console.log(error);
              });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    saveNew(){
      this.loading = true;
      this.textWorld = '文件保存中';
       this.axios.post('/api/saveMarkdown',{data:this.value,url:this.url})
        .then((response) => {
          this.loading = false;
           this.$message({
              type: 'success',
              message: '保存成功!'
            });
          console.log(response);
        })
        .catch( (error) => {
          this.loading = false;
            console.log(error);
        });
    },
    handleNodeClick(data) {
      console.log('data',data);
      if(data.children) return;
      this.url = data.pid + '/' + data.label;
      this.getMarkDown(data.pid + '/' + data.label);
    },
    getMarkDown(url){
      this.axios.get('/api/getMarkdown',{
        params: {
          fileUrl: url
        }
      })
        .then((response) => {
          this.value = response.data;
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        });
    },
    imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('image', $file);
           this.axios({
               url: '/api/addMarkdownImg',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((url) => {
             console.log(url.data.url)
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               /**
               * $vm 指为mavonEditor实例，可以通过如下两种方式获取
               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
               */
               this.$refs.md.$img2Url(pos, url.data.url);
           })
        }
  },
  mounted(){
    this.getDir();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-note-wrapper{
  min-height: 800px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.tree-style{
  min-height: 800px;
  border: 1px solid rgba(0,0,0,0.157);
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.157);
}
.custom-tree-node {
    -ms-flex: 1;
    flex: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-right: 8px;
    font-size: 16px;
}
</style>
