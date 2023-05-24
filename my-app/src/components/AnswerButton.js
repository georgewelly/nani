function AnswerButton({selected, showAnswer}) {

  return (
    <button 
      className={selected ? "SelectedNumber":""}
      onClick={showAnswer}
    >
      Answer
    </button>
  );
}

export default AnswerButton;
