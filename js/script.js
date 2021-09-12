var preloader        = $('.preloader');
var dBody            = $('body');
var Images_count     = $('img').length;
var percent          = 100 / Images_count;
var progress         = 0;
var loaded_img       = 0;


if(Images_count > 0){

    preloader.css({'background':''});

    $(window).on('load', function () {
        $preloader = $('.preloader'),
        $loader = $preloader.find('.loader');
        $loader.fadeOut();
        $preloader.delay(percent).fadeOut('slow');
    });


    for(var i = 0 ; i < Images_count; i++){
        var img_copy    = new Image();
        img_copy.src    = document.images[i].src;
        img_copy.onload = img_load;
        img_copy.onerror = img_load;
    }

    function img_load() {
        progress += percent;
        loaded_img++;

        if(progress >+ 100 || loaded_img == Images_count){
           preloader.delay(400).fadeOut('slow');
        }
        preloader.delay(progress).fadeOut('slow');
    }

}

new WOW().init();

      var arrLang = {
        'uz' : {
          'about': 'Biz haqimizda' , 
          'univer' : 'Universitetlar' ,
          'students' : 'Bizning talabalar' ,
          'contacts' : 'Aloqa' ,
          'language' : 'Til' ,
          'feedback' : 'So`rov Qoldiring' ,
          'slogan-h2' : 'Jahon darajasidagi diplomni olishni xohlaysizmi?',
          'slogan-span' : 'OTTO STUDY jamoasi sizga yordam beradi!' , 
          'about-p' : 'OTTO STUDY-chet elda ta`lim sohasida ixtisoslashgan kompaniya, endi birinchi yil muvaffaqiyatli mijozlar har qanday imtihon holda, Turkiyaning eng yaxshi Oliy o`quv yurtlariga kirishga yordam beradi. Bizni tanlab, o`zingizni kafolatlangan ta`minot va yorqin kelajagingizni ta`minlaysiz.' ,
          'univer-p' : 'Turistik mamlakat maqomidan farqli o`laroq, Turkiya oliy o`quv yurtlarining keng doirasini taklif qiladi. Mamlakatda 150 dan ortiq universitet mavjud, ularning uchdan bir qismi xususiy, qolganlari esa Turkiyaning davlat universitetlariga tegishli. Barcha oliy o`quv yurtlari xalqaro standartlarga javob beradigan ta`lim sohasida sifatli xizmatlarni taqdim etadi.' ,
          'student-1' : 'Yoqimli xodimlar, men ularga yana bir bor murojaat qilaman.' ,
          'student-2' : 'OTTO STUDY men orzu qilgan universitetga kirishga yordam berdi. Ularga rahmat!' ,
          'student-3' : 'Tezda ishladim, menga juda yoqdi!',
          'Azamat' : 'Azamat' , 
          'Nargiza' : 'Nargiza' , 
          'Farrux' : 'Farrux' ,
          'address' : 'Nukus ko`chasi 29A, Toshkent, O`zbekiston' ,
          'more': 'Batafsil ma`lumot' ,
          'one': '2010 yilda tashkil etilgan Ankara Yildirim Beyazit universiteti-Ankaraning yirik metropolida joylashgan (aholisi 5 000 000 dan ortiq) notijorat davlat oliy ta`lim muassasasi. YÖK - Oliy Ta`lim Kengashi tomonidan rasman e`tirof etilgan, Ankara Yildirim Beyazit Universiteti (AYBU) - Turkiyadagi yirik oliy ta`limning birgalikdagi ta`lim muassasasi. Ankara Yildirim Beyazit Universiteti (AYBU) bir necha o`qish sohalarida rasman tan olingan oliy ma`lumot darajalariga olib boruvchi kurslar va dasturlarni taklif etadi.Qo`shimcha ma`lumot uchun quyidagi raqamga qo`ng`iroq qiling:',
          'two':'Bandirma Onyedi Eylül Universiteti (Bandirma Onyedi Eylul Universiteti), 2015 yilda tashkil etilgan, Baliqesir shahrida joylashgan notijorat davlat oliy o`quv yurtidir (aholisi 250,000–499,999 kishi). YOK - Yüksekögretim Kurulu (YÖK - Oliy ta`lim kengashi) tomonidan rasman e`tirof etilgan Bandirma Onyedi Eylül Universiteti, Turkiyaning o`rta ta`lim oliy o`quv yurtidir. Bandirma Onyedi Eylül Universiteti bir nechta o`qish sohalarida rasman tan olingan oliy ma`lumot darajalariga olib keladigan kurslar va dasturlarni taklif etadi.',
          'three': 'Duzce universiteti - Turkiyaning Duzce shahrida joylashgan universitet. U 2006 yilda tashkil etilgan, ammo uning eng qadimgi bo`linmasi - Duzce kasb - hunar maktabi 1976 yildan beri mavjud. 2008 yilda universitet Milliy Sifat Harakatiga qo`shildi va Turk Sifat Uyushmasidan (KALDER) 4 Yulduzli Mukofot mukofotini oldi. EFQM (Evropa sifat menejmenti fondi) doirasida.2011 yil may oyida Duzce universiteti tadbirkorlikni targ`ib qiluvchi "Birgalikda biz ko`proq narsani qila olamiz" loyihasi uchun Evropa korxonalari mukofotiga sazovor bo`ldi.2012 yil yanvar oyida universitet Evropa universitetlari assotsiatsiyasining (EUA) rasmiy a`zosi bo`ldi.' ,
          'four': 'Bolu Izzet Abant Baysal Universiteti Turkiyaning Bolu shahrida joylashgan bo’lib DAVLAT universitet hisoblanadi. Bolu shahri Istanbulga 3 soatlik masofada joylashgandir.Viloyat tabiati juda ham hushmanzaradir. Universitetda ta’lim olish bilan birgalikda vaqtni unumli o’tkazish uchun barcha sharoitlar yuqori darajada yaratilgan. Oliygoh ko’plab Yevropadagi universitetlar bilan (ERASMUS vs EXCHANGE PROGRAM) hamkorlik qiladi.' ,
          'five': 'Erciyes universiteti (Erciyes universiteti), 1978 yilda tashkil etilgan, notijorat davlat oliy ta`lim muassasasi bo`lib, katta Kayseri shahrida joylashgan (aholisi 500,000 dan 1,000,000 gacha). YOK - Yüksekögretim Kurulu (YÖK - Oliy ta`lim kengashi) tomonidan rasman e`tirof etilgan Erciyes universiteti - Turkiyaning yirik, oliy ta`lim muassasasi. Erciyes Universiteti rasmiy ravishda tan olingan oliy ma`lumot darajalariga olib boradigan kurslar va dasturlarni taklif qiladi, masalan, bir necha sohalarda bakalavr.' ,
          'six' : 'Erzincan Binali Yildirim universiteti Turkiyaning Erzincan shahridagi universitet bo`lib, 25000 dan ortiq talabalarga ta`lim beradi. Unda 12 ta fakultet va 12 ta o`rta maktab (oliy ta`lim) mavjud.U 2006 yil 1 martda mavjud bo`lgan bir qator maktablardan yaratilgan. Ta`lim maktabi 1967 yilda, yuridik maktabi 1987 yilda tashkil etilgan. Universitet qabristonni boshqarish dasturini taklif qilmoqchi.U har yili US News & World Report tomonidan har xil ilmiy mezonlarga ko`ra aniqlanadigan World University Rankings toifasidagi birinchi 1000 ta universitetlar qatoriga kiradi.' , 
          'seven' : 'Eskisehir Osmangazi universiteti - Eskishahirdagi davlat universiteti.Eskishehir Osmangazi Universitetining tashkil topishi 1970 yilga to`g`ri keladi, tibbiyot, muhandislik, arxitektura va fan va adabiyot fakulteti tashkil topgan sanadan universitet hayoti Eskishehirda boshlangan.Universitet tarkibida 2007 yilda Turizm va mehmonxona menejmenti maktabi (2013 yilda turizm fakultetiga aylantirildi), Mahmudiy nomidagi kasb -hunar maktabi va Davlat konservatoriyasi, 2008 yilda stomatologiya fakulteti, 2009 yilda san`at va dizayn. Tabiatshunoslik fakulteti, Eskişehir kasb -hunar maktabi va Pedagogika fanlari instituti 2010 yilda tashkil etilgan.' ,
          'eight' : 'Gaziantep universiteti (Gaziantep universiteti), 1987 yilda tashkil etilgan, notijorat davlat oliy ta`lim muassasasi bo`lib, Gaziantep metropolining shahar aholisida joylashgan (aholisi 1 000 000 dan 5 000 000 gacha). YOK - Yüksekögretim Kurulu (YÖK - Oliy ta`lim kengashi) tomonidan rasman e`tirof etilgan, Gaziantep universiteti (GAÜN) - bu Turkiyaning yirik ta`lim muassasasi. Gaziantep universiteti (GAÜN) rasmiy ravishda tan olingan oliy ma`lumot darajalariga olib keladigan kurslar va dasturlarni taklif qiladi, masalan, bir nechta o`qish sohalarida bakalavr.',
          'nine' : 'Dicle Ünivêrsitêti - Diyarbakirda (Turkiya), Dajla daryosining sharqiy qismida joylashgan davlat universiteti. Universitet Turkiyaning janubi -sharqiy Anatoliyasidagi eng qadimgi va eng yirik oliy o`quv yurtlaridan biridir.Tarixiy Diyarbakir shahrining sharqiy qismida 27000 gektar maydonda qurilgan Dikle universiteti o`z nomini universitetni shahardan ajratib turuvchi daryodan oldi. Universitetning Diyarbakirdagi asosiy kampusidan tashqari, Egrani, Chermik, Chungush, Bismil va Silvanda kasb -hunar maktablari mavjud.' ,
          'ten': 'Karamanog`lu Mehmetbey universiteti (KMU) - Turkiyadagi davlat oliy ta`lim muassasasi. KMU 2007 yilda tashkil etilgan. Ta`lim muassasasining asosiy binosi Karaman shahrida joylashgan. Shuningdek, universitet muntazam ravishda Turkiyaning eng yaxshi universitetlari reytingida yuqori o`rinlarni egallab turadi.Karamanog`lu Mehmetbey universiteti talaba salohiyati bo`yicha o`rtacha bo`lib, maksimal 7 ming talabani o`qitadi. Universitetda 199 ga yaqin o`qituvchi ishlaydi.Ta`lim muassasasining o`z kutubxonasi bor. Universitet rivojlangan sport infratuzilmasiga ega.', 
          'eleven' : 'Kırşehir Ahi Evran universiteti - Turkiyadagi davlat oliy ta`lim muassasasi. Kırşehir Ahi Evran universiteti rasman 2006 yilda tashkil etilgan. Ta`lim muassasasi Turkiyaning kichik shahri - Kirshehirda joylashgan.Kirshehir Ahi Evran universiteti talabalar soni bo`yicha 15 mingdan ortiq talaba o`qimaydigan o`rta universitetdir. O`qituvchilar tarkibi taxminan 499 akademik mutaxassisdan iborat.Universitet kutubxonasi universitet talabalari uchun ham mavjud. Ta`lim muassasasining o`z sport inshootlari bor.' ,
          'twelve' : 'Mersin universiteti (Mersin universiteti), 1992 yilda tashkil etilgan, notijorat davlat oliy ta`lim muassasasi, Mersin shtatining kichik aholisi Yenisehirda (aholisi 50,000 dan 249,999 gacha) joylashgan. YOK - Yüksekögretim Kurulu (YÖK - Oliy ta`lim kengashi) tomonidan rasman e`tirof etilgan Mersin universiteti, Turkiyaning yirik birlashgan ta`lim oliy o`quv yurtidir. Mersin Universiteti rasmiy ravishda tan olingan oliy ma`lumot darajalariga olib boradigan kurslar va dasturlarni taklif qiladi, masalan, bir necha sohalarda bakalavr.' ,
          'thirteen' : 'Necmettin Erbakan universiteti (NEU) - Turkiyadagi davlat oliy ta`lim muassasasi. NEU o`z tarixini 2010 yilda boshlaydi. Universitetning asosiy binosi Konya shahrida joylashgan.Universitetda o`qish davomida talabalar kutubxonadan foydalanishlari mumkin. Talabalar shaharchasida universitet qo`shimcha ravishda o`z sport inshootlariga ega.' ,
          'fourteen' : 'Sakarya universiteti (Sakarya universiteti), 1992 yilda tashkil etilgan, nodavlat notijorat oliy o`quv yurti bo`lib, Sakariya shahrining o`rtasida joylashgan (aholisi 250,000–499,999 kishi). YÖK - Yüksekögretim Kurulu (YÖK - Oliy ta`lim kengashi) tomonidan rasman e`tirof etilgan Sakarya Universiteti (SAÜ) - Turkiyaning yirik ta`lim muassasasi. Sakarya Universiteti (SAÜ) rasmiy ravishda tan olingan oliy ta`lim darajalariga olib keladigan kurslar va dasturlarni taklif etadi, masalan, bakalavrgacha bo`lgan darajalar (ya`ni sertifikatlar, diplomlar, dotsent yoki fundamental), bakalavr, magistr, doktorlik darajalari.' ,
          'fifteen' : 'Sivas Cumhuriyet Universiteti - 1973 yilda Turkiya Respublikasining 50 yilligi munosabati bilan Turkiyaning Sivas viloyatida tashkil etilgan davlat universiteti. Universitetning asosiy kampusi Sivas markazidan 5 km uzoqlikda, 1100 gektar maydonda joylashgan. Qizilmoq daryosi bo`yida. Kampus Turkiyadagi beshinchi yirik universitet kampusidir.Universitet 50,000 dan ortiq bakalavr, aspirant va doktorantlar, 2,435 professor - o`qituvchilari, madaniy va sport inshootlari va kutubxonalari uchun ma`ruzalar, ta`lim imkoniyatlari, madaniy va sport tadbirlarini taklif etadi.Universitet 0 dan 100 gacha va nisbiy baholash shkalasidan foydalanadi.' ,
          'sixteen' : 'Yalova universiteti - Turkiyadagi davlat oliy ta`lim muassasasi. Yalova universiteti o`z tarixini 2008 yildan boshlaydi. Universitet Turkiyaning kichik shaharchasi Chinarchiq ichida joylashgan.Yalova universiteti - bu kichik ta`lim muassasasi bo`lib, uning hududida bir vaqtning o`zida 3000 ga yaqin talaba tahsil oladi. Yalova universitetining professor -o`qituvchilar tarkibi taxminan 199 akademikni o`z ichiga oladi. mutaxassislar. Universitetda o`qish davomida talabalar kutubxonadan foydalanishlari mumkin. Talabalar shaharchasida universitet qo`shimcha ravishda o`z sport inshootlariga ega.', 
          'seventeen' : 'Karabük universiteti (KBU) - Turkiyada davlat oliy ta`lim muassasasi. KBU 2007 yilda o`z faoliyatini boshladi. Universitetning asosiy binosi Karabyukning kichik shaharchasida joylashgan. Karabük universiteti muntazam ravishda Turkiyaning eng yaxshi universitetlari reytingida eng yuqori o`rinni egallaydi.O`rta maktab sifatida, Karabük universiteti ko`proq mezbonlik qiladi 19 ming talaba. Universitetga kirish uchun mahalliy abituriyentlar bilan birgalikda chet el fuqarolari ham murojaat qilishlari mumkin. Ta`lim muassasasining professor-o`qituvchilari 999 nafar o`qituvchiga ega. Trening davomida universitet talabalari talabalar almashinuv dasturlarida ishtirok etish imkoniyatiga ega.Universitet talabalari ham mavjud universitet kutubxonasi. Universitet talabalari talabalar turar joyida uchun o`qimoq mumkin.'
        }, 

        'ru' : {
          'about': 'О нас' , 
          'univer' : 'Университеты' ,
          'students' : 'Студенты' ,
          'contacts' : 'Контакты' ,
          'language' : 'Язык' ,
          'feedback' : 'Оставить заявку' ,
          'slogan-h2' : 'Хотите получить диплом мирового уровня?',
          'slogan-span' : 'Команда OTTO STUDY поможет Вам!' ,
          'about-p' : 'OTTO STUDY - компания, специализирующаяся в сфере получения образования за границей, вот уже не первый год успешно помогает клиентам поступить в лучшие ВУЗы Турции,БЕЗ КАКИХ-ЛИБО ЭКЗАМЕНОВ. Выбирая нас, Вы обеспечиваете себе гарантированное поступление и своё светлое будущее.' ,
          'univer-p' : 'Вопреки статусу туристической страны, Турция предлагает широкий спектр высших учебных заведений. В стране находится более 150 университетов, приблизительно треть из них — частные, остальные относятся к государственным университетам Турции. Все вузы предоставляют качественные услуги в сфере образования, отвечающие мировым стандартам.' ,
          'student-1' : 'Приятный персонал, с радостью обращусь к ним ещё раз.' ,
          'student-2' : 'OTTO STUDY помогли мне поступить в университет, о котором я мечтал. Спасибо им!' ,
          'student-3' : 'Сработали быстро, мне очень понравилось!' ,
          'Azamat' : 'Азамат' , 
          'Nargiza' : 'Наргиза' , 
          'Farrux' : 'Фаррух' , 
          'address' : 'Улица Нукус 29А, Ташкент, Узбекистан' ,
          'more': 'Подробнее' ,
          'one': 'Университет Анкары Йилдирим Беязит (Ankara Yildirim Beyazit University), основанный в 2010 году, является некоммерческим государственным высшим учебным заведением, расположенным в большом мегаполисе Анкара (с населением более 5 000 000 жителей). Официально признанный YÖK - Советом высшего образования, Университет Анкары Йилдирим Беязит (AYBU) представляет собой крупное турецкое высшее учебное заведение с совместным обучением. Университет Анкары Йилдирим Беязит (AYBU) предлагает курсы и программы, ведущие к официально признанным степеням высшего образования в нескольких областях обучения.',
          'two':'Bandirma Onyedi Eylül Üniversitesi (Университет Bandirma Onyedi Eylul), основанный в 2015 году, является некоммерческим государственным высшим учебным заведением, расположенным в городе Балыкесир (население 250 000–499 999 жителей). Официально признанный YÖK - Yüksekögretim Kurulu (YÖK - Совет высшего образования), Bandirma Onyedi Eylül Üniversitesi является средним турецким высшим учебным заведением с совместным обучением. Bandirma Onyedi Eylül Üniversitesi предлагает курсы и программы, ведущие к официально признанным степеням высшего образования в нескольких областях обучения.',
          'three': 'Университет Дюздже - это университет, расположенный в городе Дюздже, Турция. Он был основан в 2006 году, но его старейшее подразделение, профессионально-техническое училище Дюздже, существует с 1976 года. В 2008 году университет присоединился к Национальному движению за качество и получил награду «4 звезды за превосходство» от Турецкой ассоциации качества (KALDER). в рамках EFQM (Европейский фонд управления качеством).В мае 2011 года Университет Дюздже получил награду European Enterprise Award за проект «Вместе мы можем сделать больше», который способствует развитию предпринимательства.В январе 2012 года университет стал официальным членом Европейской ассоциации университетов (EUA).' ,
          'four': 'Bolu Izzet Abant Baysal University - это ГОСУДАРСТВЕННЫЙ университет, расположенный в Болу, Турция.Город Болу находится в 3 часах езды от Стамбула.Природа региона очень живописна. Созданы все условия для продуктивного времяпрепровождения вместе с обучением в университете. Университет сотрудничает со многими европейскими университетами (ERASMUS vs. EXCHANGE PROGRAM).' ,
          'five': 'Erciyes Üniversitesi (Университет Эрджиес), основанный в 1978 году, является некоммерческим государственным высшим учебным заведением, расположенным в большом городе Кайсери (население от 500 000 до 1 000 000 жителей). Официально признанный YÖK - Yüksekögretim Kurulu (YÖK - Совет высшего образования), Erciyes Üniversitesi является большим турецким высшим учебным заведением с совместным обучением. Erciyes Üniversitesi предлагает курсы и программы, ведущие к официально признанным степеням высшего образования, таким как степень бакалавра в нескольких областях обучения.' ,
          'six' : 'Erzincan Binali Yıldırım University - это университет в Эрзинджане, Турция, в котором обучается более 25000 студентов. В нем 12 факультетов и 12 средних школ (высшее образование).Он был создан 1 марта 2006 года из ряда существующих школ. Образовательная школа была основана в 1967 году, а юридическая школа - в 1987 году. Университет планирует предложить программу управления кладбищами.Он входит в первую тысячу университетов в категории «Мировой рейтинг университетов», который ежегодно определяется US News & World Report в соответствии с различными научными критериями.' , 
          'seven' : 'Университет Эскишехира Османгази - государственный университет в Эскишехире. Основание Университета Эскишехира Османгази датируется 1970 годом, датой основания факультета медицины, инженерии, архитектуры и науки и литературы, с которого началась университетская жизнь в Эскишехире .В составе университета, Школа туризма и гостиничного менеджмента в 2007 г. (преобразованная в Факультет туризма в 2013 г.), Профессиональное училище Махмудие и Государственная консерватория, Факультет Стоматология в 2008 году, искусство и дизайн в 2009 году. Факультет естественных наук, Эскишехирское профессиональное училище и Институт педагогических наук были созданы в 2010 году.' ,
          'eight' : 'Gaziantep Üniversitesi (Университет Газиантепа), основанный в 1987 году, представляет собой некоммерческое государственное высшее учебное заведение, расположенное в городских условиях мегаполиса Газиантеп (с населением от 1 000 000 до 5 000 000 жителей). Официально признанный YÖK - Yüksekögretim Kurulu (YÖK - Совет высшего образования), Gaziantep Üniversitesi (GAÜN) является большим турецким высшим учебным заведением с совместным обучением. Gaziantep Üniversitesi (GAÜN) предлагает курсы и программы, ведущие к официально признанным степеням высшего образования, таким как степень бакалавра в нескольких областях обучения.',
          'nine' : 'Университет Дикле государственный университет, расположенный в Диярбакыре , Турция , на восточной стороне реки Тигр. Университет является одним из старейших и крупнейших высших учебных заведений в юго - восточной Анатолии, Турция .Университет Дикле, построенный на территории площадью 27 000 акров в восточной части исторического города Диярбакыр, получил свое название от реки, которая отделяет университет от города. Помимо своего основного кампуса в Диярбакыр, университет имеет профессионально - технических школ в Эграни, Чермик, Чюнгюш, Bismil и Сильван.' ,
          'ten': 'Karamanoğlu Mehmetbey University (KMU) - государственное высшее учебное заведение в Турции. KMU был учреждён в 2007 году. Главный корпус учебного заведения располагается в Карамане. Также университет регулярно занимает высокие строчки в рейтинге лучших вузов Турции.Karamanoğlu Mehmetbey University - среднее по размерам учебное заведение, вмещающее не более 7 тысяч учащихся. В вузе преподаёт примерно 199 учителей.Учебное заведение располагает собственной библиотекой. В университете присутствует развитая спортивная инфраструктура.', 
          'eleven' : 'Kırşehir Ahi Evran University - государственное высшее учебное заведение в Турции. Kırşehir Ahi Evran University был официально учреждён в 2006 году. Учебное заведение находится в пределах небольшого города Турции - Кыршехир.Kırşehir Ahi Evran University - средний по количеству студентов вуз, в котором получают образование не более 15 тыс. студентов. Преподавательский состав примерно 499 академических специалистов.Студентам университета также доступна университетская библиотека. Учебное заведение располагает собственными спортивными сооружениями.' ,
          'twelve' : 'Mersin Üniversitesi (Университет Мерсина), основанное в 1992 году, является некоммерческим государственным высшим учебным заведением, расположенным в небольшом городе Енишехир (с населением от 50 000 до 249 999 жителей), Мерсин. Официально признанный YÖK - Yüksekögretim Kurulu (YÖK - Совет высшего образования), Mersin Üniversitesi является крупным турецким высшим учебным заведением с совместным обучением. Mersin Üniversitesi предлагает курсы и программы, ведущие к официально признанным степеням высшего образования, таким как степень бакалавра в нескольких областях обучения.' ,
          'thirteen' : 'Necmettin Erbakan University (NEU) - государственное высшее учебное заведение в Турции. NEU начинает свою историю с 2010 года. Главное здание вуза располагается в Коньях.В период своего обучения в университете студенты могут пользоваться студенческой библиотекой. На территории кампуса университет дополнительно располагает собственными спортивными сооружениями.' ,
          'fourteen' : 'Sakarya Üniversitesi (Университет Сакарья), основанное в 1992 году, является некоммерческим государственным высшим учебным заведением, расположенным в городских условиях среднего города Сакарья (население 250 000–499 999 жителей). Официально признанный YÖK - Yüksekögretim Kurulu (YÖK - Совет высшего образования), Sakarya Üniversitesi (SAÜ) является большим турецким высшим учебным заведением с совместным обучением. Sakarya Üniversitesi (SAÜ) предлагает курсы и программы, ведущие к официально признанным степеням высшего образования, таким как степени предварительного бакалавра (т.е. сертификаты, дипломы, ассоциированные или фундаментальные), степени бакалавра, магистра, доктора в нескольких областях обучения.' ,
          'fifteen' : 'Университет Сиваса Джумхуриета - государственный университет, основанный в провинции Сивас в Турции в 1973 году к 50-летию Турецкой Республики. Главный кампус университета расположен в 5 км от центра города Сивас , на территории 1100 га у реки Кызылырмак. Кампус является пятым по величине университетским городком в Турции. Университет предлагает лекции, образовательные возможности, культурные и спортивные мероприятия для более чем 50 000 студентов, аспирантов и докторантов, 2435 преподавателей, культурные и спортивные объекты и библиотеки.В университете используется как шкала оценок от 0 до 100, так и относительная шкала оценок.' ,
          'sixteen' : 'Yalova University - небольшое учебное заведение, на территории которого одновременно обучается около 3000 студентов. Преподавательский состав Yalova University включает примерно 199 академич. специалистов.В период своего обучения в университете студенты могут пользоваться студенческой библиотекой. На территории кампуса университет дополнительно располагает собственными спортивными сооружениями.' , 
          'seventeen' : 'Karabük University (KBU) - государственное высшее учебное заведение в Турции. KBU начал свою работу в 2007 году. Главный корпус университета находится в пределах небольшого города Карабюка. Karabük University регулярно занимает топовые строчки в рейтинге лучших университетов Турции.Будучи средним по размерам вузом, Karabük University вмещает более 19 тысяч студентов. Вместе с местными абитуриентами на поступление в университет могут претендовать и иностранные граждане. Преподавательский состав учебного заведения насчитывает 999 учителей. Во время обучения у студентов университета есть возможность участвовать в программах студенческого обмена.Студентам университета также доступна университетская библиотека. Студенты университета могут претендовать на место в студенческом общежитии.'
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

