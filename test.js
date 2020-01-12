        $(document).ready(function(){
         $('#protect').find('input').focus();
   $('#protect').find('a').attr('href','https://wa.me/6289618885066?text=Passwordnya+apa+kang?..%0A%0Avia '+window.location.href);

        });
        $('#protect').on('click','button',function(){
         var dasar = 'kangrian';
         var bangsat = '.net';
          var dasarBangsat = dasar + bangsat;
          var pw = $(this).parents('#protect').find('.pw').val();
          if(pw != dasarBangsat) {
            alert('O o p s ! Kata sandi salah..');
            location.reload();
          } else {
            $(this).parents('#protect').addClass('hide');
          }
          return false;
        });
