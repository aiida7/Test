let apiMainURL = 'https://x8ki-letl-twmt.n7.xano.io/api:oqdl5cgg';

if(document.getElementById('registerBtn')){
        document.getElementById('registerBtn').onclick = function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let repeat_password = document.getElementById('repeat_password').value;

    let apiEndpoint = apiMainURL + "/auth/signup";

    let requestBody = {
        name,
        email,
        phone,
        password,
        repeat_password
    };

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => response.json())
        .then(data => {
            if(data.authToken){
                localStorage.setItem('authToken', data.authToken);
              // first test without uncommenting line 
              // then uncomment this and test again:
              //  window.location.href = 'novi_oglas.html';  
                console.log('Success:', data);
            }
        });
    };
}


if(document.getElementById('odjaviSe')){
    document.getElementById('odjaviSe').onclick = function(e) {
        e.preventDefault();

        localStorage.clear();
        window.location.href = "index.html";
    }
}

// if(document.getElementById('noviOglasBtn')){
//     document.getElementById('noviOglasBtn').onclick = function(e){
//         e.preventDefault();

//         let apiEndpoint = apiMainURL + "/car";

//         let formData = new FormData();

//         let marka = document.getElementById('marka').value;
//         let price = document.getElementById('price').value;
//         let fuel = document.getElementById('fuel').value;
//         let year = document.getElementById('year').value;
//         let user_id = document.getElementById('user_id').value;
//         let karoserija = document.getElementById('karoserija').value;
//         let file = document.getElementById('file');

//         formData.append('marka', marka);
//         formData.append('price', price);
//         formData.append('fuel', fuel);
//         formData.append('year', year);
//         formData.append('user_id',  user_id);
//         formData.append('karoserija', karoserija);
//         formData.append('file', file.files[0]);

//         fetch(apiEndpoint, {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             alert('Oglas uspješno dodat. Čeka se odobravanje administratora.');
//           //  location.reload();
//         });
//     }
// }