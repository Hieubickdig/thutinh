// Thay đổi nội dung búc thư ở đây
var letterContent ="Hôm nay là một ngày thật đặc biệt – ngày thế giới đón chào một người tuyệt vời nhất mà tớ từng gặp, người cho tớ biết thế nào là yêu và được yêu. Mỗi khoảnh khắc được gần Tâm đều là những giây phút hạnh phúc nhất của tớ, Tâm cho tớ dũng khí, dạy tớ cách quan tâm, chăm sóc người khác, đưa tớ đi qua nhiều góc nhìn thú vị về cuộc sống, thay đổi tớ thành con người hoàn thiện hơn. Với tớ, Tâm luôn là cô gái hoàn hảo, không những xinh đẹp, thông minh mà còn rất tinh tế tốt bụng, được gặp và đồng hành cùng Tâm có lẽ là ân huệ lớn nhất mà ông trời ban tặng cho một người và may mắn người đó lại là tớ. Cảm ơn Tâm vì tất cả, vì đã chấp nhận con người tớ, vì không ít lần ở lại, bỏ qua lỗi lầm của tớ, cho tớ cơ hội bù đắp, sửa đổi, tớ luôn trân trọng những tình cảm chân thành ấy, không bao giờ muốn em bé của mik phiền muộn . Tuổi mới mong Tâm luôn nhận được sự yêu thương, chiều chuộng từ gia đình và bạn bè, đạt được nhiều thành công trong cuộc sống, mong sao Tâm luôn tươi cười thật rạng rỡ cho tớ được ngắm mỗi ngày. Hãy nhớ rằng dù có thế nào đi chăng nữa, tớ vẫn sẽ ở đây để đồng hành, hỗ trợ, chăm sóc cho cô gái của tớ.💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})