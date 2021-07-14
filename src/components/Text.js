import "../componentcss/allcss.css";
import Character from "./Character";


function Text(props) {
 

 
   
      let i=props.index;
      let s=props.data;

  console.log("see ",i);
  return (
    <div className="para">
      {[...s].map((c, index) =>
        i === index&&s[i]!==' ' ? (
          <Character word={c} key={index} classIs="bold" />
        ) : (
          <Character word={c} key={index} classIs="normal" />
        )
      )}

     
    </div>
  );
}

export default Text;
