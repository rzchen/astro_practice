window.addEventListener('DOMContentLoaded', function() {
  var vue = {
    el: '#app',
    data: {
      InOut: '',
      inputTitle: '',
      inputMoney: '',
      Total: '',
      lists: [
        { Title: '買手機', Money: 20000 }
      ]
    },
    methods: {
      addNewList: function() {
        this.lists.push({
          Title: this.inputTitle,
          Money: this.inputMoney
        })
        this.inputTitle=''
        this.inputMoney=''
      }
  }
  }
  
  new Vue(vue)  
})

