import "./App.css";

export default function App() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input, key) => {
    input.addEventListener("keyup", handelkey);
    input.addEventListener("paste",handlepaste);
  });
  function handlepaste (e){
    console.log("from paste")
   let otp =  e.clipboardData.getData("text");
   let data = otp.split("")
   console.log(data.length===inputs.length);
   if(data.length === inputs.length){
    inputs.forEach((input,key)=>{
      input.value =otp[key]
     })
     submit();
   }

   console.log("from paste",otp.split(""));
  }
  const submit = () => {
    let otp = ""
    inputs.forEach((input,key)=>{
            otp+=input.value

    })

    console.log("your otp is",otp)
  };
  function handelkey(e) {
    const input = e.target;
    let fieldindex = parseInt(e.target.dataset.num);
    if (input?.value.length > 0 && fieldindex < inputs.length ) {
      input?.nextElementSibling.focus();
    }
    if (e?.key === "Backspace") {
      input?.previousElementSibling.focus();
    }

    console.log("selection",fieldindex === inputs?.length)
    if (fieldindex === inputs?.length) {
      console.log("in if");
      submit()
    }

    console.log("hello ",input);

  }


  return (
    <div className="otp">
      <div className="inputs">
        <input maxLength="1" type="text" data-num="1"/>
        <input maxLength="1"  type="text" data-num="2" />
        <input maxLength="1"  type="text" className="space" data-num="3" />
        <input maxLength="1"  type="text" data-num="4"/>
        <input maxLength="1"  type="text" data-num="5"/>
        <input maxLength="1"  type="text" data-num="6"/>
      </div>
    </div>
  );
}
