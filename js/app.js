const url = "https://adp.im/api/garage.json";

const vm = new Vue({
    el: '#parking-app',
    data: {
        textkey: ['zero','one','two','three','four','five'],
        results: []
    },
    mounted() {
        axios.get(url).then(response => {
            this.results = response.data
        })
        document.getElementById('parking-app').style.display = 'block';
    }
});

$('#floorlist a').on('click', function (event) {
    event.preventDefault()
    $(this).tab('show')
});
