

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


      var arrLang = {
        'uz' : {
          'about': 'Bizlar haqida' , 
          'univer' : 'Universitetlar' ,
          'students' : 'Studentlarimiz' ,
          'contacts' : 'Kontaktlarimiz'
        }, 

        'ru' : {
          'about': 'О нас' , 
          'univer' : 'Университеты' ,
          'students' : 'Студенты' ,
          'contacts' : 'Контакты'
        }
      }

      $(function(){
        $('.translate').click(function(){
          var lang = $(this).attr('id');

          $('.lang').each(function(index , item){
            $(this).text(arrLang[lang][$(this).attr('key')])
          })
        })
      })

