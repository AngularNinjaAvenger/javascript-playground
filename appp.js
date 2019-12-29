let xhr =new XMLHttpRequest;
xhr.open('GET','comments.json',true);
xhr.onload=function () {
    if (this.status===200) {
        let res = this.responseText;
        let resp = JSON.parse(res);
        console.log(resp[0].name)
    }
}
xhr.send();