import "../componentcss/allcss.css"


function TotalWord(props) {
//console.log(props.ind,props.word)
  
    return (
  <div className="wordBox">
         {props.tot}
    </div>
  );
}

export default TotalWord;
