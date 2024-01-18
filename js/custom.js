function startCounter() {
    let count = 1;
    const targetElement = document.querySelector('#financialSection .count');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const interval = setInterval(() => {
                    targetElement.textContent = count;
                    count++;
                    if (count > 50) {
                        targetElement.textContent = (count - 1) + '+';
                        clearInterval(interval);
                    }
                }, 25);
                observer.disconnect();
            }
        });
    });
    observer.observe(targetElement);
}

document.addEventListener('DOMContentLoaded', startCounter);

let mpcount = 1;
let bnkcount = 1;
let kyccount = 1;
const mpinterval = setInterval(() => {
    if (mpcount > 3) {
        mpcount = 1
        bnkcount = 1
    }
    if (bnkcount > 4) {
        bnkcount = 1
    }
    $('.mp-text').removeClass('show')
    $('.text-'+mpcount).addClass('show')
    $('.bank-text').removeClass('show')
    $('.bank-text-'+bnkcount).addClass('show')
    $('.kyc-text').removeClass('show')
    $('.kyc-text-'+mpcount).addClass('show')
    mpcount++;
    bnkcount++;
    kyccount++;
}, 2000);

document.addEventListener('scroll', function () {
    var windowWd = window.innerWidth
    if (windowWd > 991) {

        var centerY = window.innerHeight / 3;

        // marketplace
        var background = document.getElementById('background');
        var content = document.getElementById('content');
        var contentRect = background.getBoundingClientRect();

        if (contentRect.bottom >= centerY && contentRect.top <= centerY) {
            content.style.position = 'fixed';
            content.style.top = '50%';
            content.style.transform = 'translate(-50%, -50%)';

            // if (contentRect.top > -500) {
            //     $('.text-2').removeClass('show')
            //     $('.text-3').removeClass('show')
            //     $('.text-1').addClass('show')
            // } else if (contentRect.top > -1000) {
            //     $('.text-1').removeClass('show')
            //     $('.text-3').removeClass('show')
            //     $('.text-2').addClass('show')
            // } else {
            //     $('.text-1').removeClass('show')
            //     $('.text-2').removeClass('show')
            //     $('.text-3').addClass('show')
            // }
        } else {
            content.style.position = 'absolute';
            content.style.top = '50%';
            content.style.transform = 'translate(-50%, -50%)';
        }

        // mobile
        var mblbackground = document.getElementById('mblBackground');
        var mblcontent = document.getElementById('mblContent');
        var mblcontentRect = mblbackground.getBoundingClientRect();

        if ((mblcontentRect.bottom >= centerY + 100) && mblcontentRect.top <= centerY) {
            mblcontent.style.position = 'fixed';
            mblcontent.style.top = '30%';
            mblcontent.style.width = '50%';
            mblcontent.style.transform = 'translate(-90%)';
            console.log('top',mblcontentRect.top)
            if (mblcontentRect.top > 0) {
                $('.mbl-text-2').removeClass('show')
                $('.mbl-text-3').removeClass('show')
                $('.mbl-text-4').removeClass('show')
                $('.mbl-text-1').addClass('show')
            } else if (mblcontentRect.top > -180) {
                $('.mbl-text-1').removeClass('show')
                $('.mbl-text-3').removeClass('show')
                $('.mbl-text-4').removeClass('show')
                $('.mbl-text-2').addClass('show')
            } else if (mblcontentRect.top > -340) {
                $('.mbl-text-1').removeClass('show')
                $('.mbl-text-2').removeClass('show')
                $('.mbl-text-4').removeClass('show')
                $('.mbl-text-3').addClass('show')
            } else {
                $('.mbl-text-1').removeClass('show')
                $('.mbl-text-2').removeClass('show')
                $('.mbl-text-3').removeClass('show')
                $('.mbl-text-4').addClass('show')
            }
        } else {
            mblcontent.style.position = 'absolute';
            $('.mbl-text-1').removeClass('show')
            $('.mbl-text-2').removeClass('show')
            $('.mbl-text-3').removeClass('show')
        }        
    }
});