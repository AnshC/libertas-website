export function News(){
    const api = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=united%20nations%20human%20rights&api-key=miAAxwJUDvZwHAj6slk4RnfciGpR53bm"

fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data)
        var i;
        i = -1;
        while(i < 9){
            
            i = i + 1;

            document.getElementById('head' + i).innerHTML = i + 1 + '. ' + data.response.docs[i].headline.main;
            document.getElementById('para' + i).innerHTML = data.response.docs[i].lead_paragraph + ' ' + data.response.docs[i].abstract;
            document.getElementById('b' + i).href = data.response.docs[i].web_url;
        }
    })
}