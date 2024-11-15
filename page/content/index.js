async function getArticleList(status="",channel_id="",page = "1",per_page="4"){

    try {
        const res = await axios({
            url: '/v1_0/mp/articles',
            method:'GET',
            params:{
                status,
                channel_id,
                page,
                per_page,
                
            }
        })
        alert("request success!",1)    
        console.log(res.data.results)
        const artList = document.querySelector(".art-list")
        console.log("artList == null"+(artList == null))
        const htmlStr = res.data.results.map(item => `
        <tr>
          <td>
            <img src="${item.cover.type === 1 ? item.cover.images[0] : ''}" alt="">
          </td>
          <td>${item.title}</td>
          <td>
            ${item.status === '1' ? 
              '<span class="badge text-bg-success">审核通过</span>' : 
              '<span class="badge text-bg-primary">待审核</span>'}
          </td>
          <td>
            <span>${item.pubdate || '2023-04-27 10:59:34'}</span>
          </td>
          <td>
            <span>${item.read_count || 0}</span>
          </td>
          <td>
            <span>${item.like_count || 0}</span>
          </td>
          <td>
            <span>${item.comment_count || 0}</span>
          </td>
          <td>
            <i class="bi bi-pencil-square edit"></i>
            <i class="bi bi-trash3 del"></i>
          </td>
        </tr>`).join('');
        console.log(htmlStr)
        document.querySelector(".art-list").innerHTML = htmlStr
        console.log(document.querySelector(".art-list").innerHTML)

    } catch (error) {
        console.log(error)
        alert("request failed!",1)   
    }
}
getArticleList()

const filter = document.querySelector(".sel-btn")

filter.addEventListener("click",async ()=>{
     status =  document.querySelector('input[name="status"]:checked').value;
     channel =  document.querySelector('select[name="channel_id"]').value
    channel = channel=="请选择文章频道" ?"":channel
    console.log(status)
    console.log(channel)
    getArticleList(status,channel)

})
