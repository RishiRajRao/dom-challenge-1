function replaceImg() {
  const imges = document.querySelectorAll("img");
  // console.log(imges[0].src)
  let [src1, src2] = [imges[0].src, imges[1].src];
  // console.log(src1,src2)
  imges[0].onclick = () => {
    [imges[0].src, imges[1].src] = [imges[1].src, imges[0].src];
  };
  imges[1].onclick = () => {
    [imges[0].src, imges[1].src] = [imges[1].src, imges[0].src];
  };
}

replaceImg();
