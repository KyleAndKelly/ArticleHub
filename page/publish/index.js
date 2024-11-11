
const { createEditor, createToolbar } = window.wangEditor

const editorConfig = {
    placeholder: 'Type here...',
    onChange(editor) {
      const html = editor.getHtml()
      console.log('editor content', html)
      document.querySelector(".publish-content").value = html
    }
}

const editor = createEditor({
    selector: '#editor-container',
    html: '<p><br></p>',
    config: editorConfig,
    mode: 'default', // or 'simple'
})

const toolbarConfig = {}

const toolbar = createToolbar({
    editor,
    selector: '#toolbar-container',
    config: toolbarConfig,
    mode: 'default', // or 'simple'
})

async function setChannals(){
    result = await axios({
        url:'/v1_0/channels'
    })

    htmlStr = `<option value="" selected>请选择文章频道</option>`+result.data.channels.map(item=>`<option value=${item.id}>${item.name}</option>`).join('')
    console.log(htmlStr)
    document.querySelector('.form-select').innerHTML = htmlStr
}
setChannals()

document.querySelector(".img-file").addEventListener("change", async e =>{
    console.log(e)
    image_file = e.target.files[0]
    console.log(image_file)
    f = new FormData()
    f.append("image",image_file)
    try {
        const res = await axios({
            url: '/v1_0/upload',
            method:'POST',
            data:f
        })
        myalert("upload success!",1)    
        console.log(res)
        console.log(res.data.url)
        document.querySelector(".rounded").src = res.data.url
        document.querySelector(".rounded").classList.add("show")
        document.querySelector(".place").classList.add("hide")
    
    } catch (error) {
        console.log(error)
        myalert("upload success!",1)   
    }

    


    
    
})