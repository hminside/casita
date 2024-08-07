        let images = [
            "/casita/images/casita_4.jpg",
            "/casita/images/casita_5.jpg",
            "/casita/images/casita_6.jpg",
            "/casita/images/casita_7.jpg",
            "/casita/images/casita_8.jpg",
            "/casita/images/casita_9.jpg",
            "/casita/images/casita_10.jpg",
            "/casita/images/casita_11.jpg",
            "/casita/images/casita_12.jpg",
            "/casita/images/casita_13.jpg",
            "/casita/images/casita_14.jpg",
        ];

        function imageSlider(parent, images){
            let currentIndex = 0;

            // 선택자
            let slider = {
                parent: parent,
                images: parent.querySelector(".slider__img"),
                thumbnails: parent.querySelector(".slider__thumb"),
                prevBtn: parent.querySelector(".slider__btn .prev"),
                nextBtn: parent.querySelector(".slider__btn .next")
            };

            // 이미지 출력하기
            slider.images.innerHTML = images.map((image, index) => {
                return `<img src="${image}" alt="이미지${index}">`;
            }).join("");

            // 이미지 활성화(active)하기
            let imageNodes = slider.images.querySelectorAll("img");
            imageNodes[currentIndex].classList.add("active");


            // 썸네일 이미지 출력하기
            slider.thumbnails.innerHTML = slider.images.innerHTML;

            // 썸네일 활성화(active)하기
            let thumnailNodes = slider.thumbnails.querySelectorAll("img");
            thumnailNodes[currentIndex].classList.add("active");

            // 썸네일 이미지 클릭하기_for문
            for(let i=0; i<thumnailNodes.length; i++){
                thumnailNodes[i].addEventListener("click", function(){      //this값을 가져올 수 있음
                    slider.thumbnails.querySelector("img.active").classList.remove("active");
                    thumnailNodes[i].classList.add("active");

                    imageNodes[currentIndex].classList.remove("active");
                    currentIndex = i;
                    imageNodes[currentIndex].classList.add("active");
                });
            }
            
            // 썸네일 이미지 클릭하기_forEach()
            thumnailNodes.forEach((thumb, index) => {
                thumb.addEventListener("click", function(){
                    thumnailNodes[currentIndex].classList.remove("active");
                    thumnailNodes[index].classList.add("active");

                    imageNodes[currentIndex].classList.remove("active");
                    currentIndex = index;
                    imageNodes[currentIndex].classList.add("active");
                });
            });

            // 왼쪽 버튼 클릭하기
            slider.prevBtn.addEventListener("click", () => {
                imageNodes[currentIndex].classList.remove("active");
                currentIndex--;
                
                // 0 4 3 2 1 0 4 3 2 1...
                if(currentIndex < 0) currentIndex = images.length - 1;

                imageNodes[currentIndex].classList.add("active");

                // 썸네일 버튼 클릭하기
                thumnailNodes[currentIndex].classList.remove("active");
                thumnailNodes[currentIndex].classList.add("active");
            });

            // 오른쪽 버튼 클릭하기
            slider.nextBtn.addEventListener("click", () => {
                imageNodes[currentIndex].classList.remove("active");
                thumnailNodes[currentIndex].classList.remove("active");

                // 1 2 3 4 0 1 2 3 4...
                currentIndex = (currentIndex + 1) % images.length;

                imageNodes[currentIndex].classList.add("active");
                thumnailNodes[currentIndex].classList.add("active");

                
            });

            
        };

        imageSlider(document.querySelector(".slider__wrap"), images);
