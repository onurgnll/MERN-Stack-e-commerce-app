import axios from "axios";

function Add() {
    const handleClickCategory = (e) => {
        axios.post('http://localhost:5000/api/categories', {

            name: e.target.previousSibling.value,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleClickProduct = (e) => {
        axios.post('http://localhost:5000/api/products', {

            name: e.target.previousSibling.previousSibling.previousSibling.previousSibling.value,
            category:  e.target.previousSibling.previousSibling.previousSibling.value,
            price: Number(e.target.previousSibling.previousSibling.value),
            image_url:  e.target.previousSibling.value,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (

        <div>
            <div>
                <input type="text" placeholder="kategori ismi" />
                <button onClick={handleClickCategory}>kategori ekle</button>

            </div>

            <div>
                <input type="text" placeholder="ürün ismi" />
                <input type="text" placeholder="ürün kategorisi" />
                <input type="number" placeholder="ürün fiyat" />
                <input type="text" placeholder="ürün resim url" />
                <button onClick={handleClickProduct}>ürün ekle</button>


            </div>

        </div>

    );
}

export default Add;