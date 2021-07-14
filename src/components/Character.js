import "../componentcss/allcss.css"
function Character(props) {
//console.log(props.ind,props.word)
  
    return (
  <div className={props.classIs}>
   {props.word}

  </div>
  );
}

export default Character;
