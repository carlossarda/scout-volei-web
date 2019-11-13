class CurlComponent {

    baseUrl = "https://scout-volei.herokuapp.com";

    _handleErrors(res) {
        if(!res.ok) throw new Error(res.statusText);
        return res;
    }

    get(url) {
        return fetch(this.baseUrl + url,{
            headers: {
                'Content-type' : 'application/json;charset=UTF-8',
                'Accept' : 'application/json'}
        })
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }

    post(url, dado) {
        return fetch(this.baseUrl + url, {
            headers: { 'Content-type' : 'application/json;charset=UTF-8','Accept' : 'application/json'},
            method: 'post',
            body: JSON.stringify(dado)
        })
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }
}

export default CurlComponent;