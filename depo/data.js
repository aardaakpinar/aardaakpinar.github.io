var count = 0;
var id = ["0","1","2"];
var lnk = [
    "https://devnar.github.io/botlimon",
    "",
    "https://devnar.github.io/botlimon"];
var tit = [
    "Limon'un tasarımı yenilendi",
    "Site tek sayfa haline getirildi",
    "Limon'un ana sayfası silindi"
];
var tim = [
    "Şubat 12, 2022",
    "Ocak 24, 2022",
    "Nisan 2, 2020"
];
var dec = [
    "Yenilikler bunlar<br><li>Yeni ayarlar bölümü</li>\n<li>Sesli yazma özelliği</li>\n<li>Yeni tema</li>",
    "<p>sebebi: daha hızlı yüklemesini sağlamak</p>\n<span>başka yenilikler:</span>\n<li>twitter sosyal simgesi eklendi</li>\n<li>haberler açılır kapanır hale getirildi</li>\n<li>sosyal hesaplarda değişiklik yapıldı</li>\n<li>Haber başlıklarının boyutu h1 den h3'e alındı (küçültüldü)</li>",
    "Chatbotu test etmekte insanlar zorlandığı için kaldırıldı."
]

function load()  {
    while (count < id.length) {
        document.getElementById("box").innerHTML += "<div class='link customLinkColor'><a class='btn btn-block btn-lg text-left animate__infinite button-1' href='" + lnk[count] + "' data-profile='' data-id='"+ id[count] +"' target='_blank'><h4>" + tit[count] + "</h4><h6>paylaşım tarihi: " + tim[count] + "<span class='nc-opacity'></span></h6><div><hr>" + dec[count] + "</div></a></div>"
        
        count++
    }
}
