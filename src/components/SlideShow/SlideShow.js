
import * as C from "./styles";

export const SlideShow = ({ images }) => {


    const img = [];

    images.map((image) => {
        img.push(image.image);
    });
    
    function changeSlide(url) {
        const mainImg = document.getElementById("mainImg");
        mainImg.src = url;
    }
    
    return (
        <C.Container>
            <img name="mainImg" id="mainImg" src={img[0]} alt='screenshot'/>
            
            <C.tumbArea>
                {images.map((image) => {
                    return (
                        <img
                            key={image.id}
                            src={image.image}
                            onClick={() => changeSlide(image.image)}
                            alt="thumbnail"
                        />
                    );
                })}
            </C.tumbArea>
        </C.Container>
    );
    
    
};
