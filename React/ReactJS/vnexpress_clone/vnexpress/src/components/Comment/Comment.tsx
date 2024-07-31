const Comment = () => {
  return (
    <div className="comments">
      <div className="header-cmts">
        <div className="left-cmt">Ý kiến bạn đọc</div>
        <div className="right-cmt">
          <a href="#" className="newest-cmt">
            Mới nhất |{" "}
          </a>
          <a href="/"> Quan tâm nhất</a>
        </div>
      </div>

      <textarea name="" id="" cols={100} rows={7} defaultValue={"Ý kiến"}>
      </textarea>

      <button className="btn-answer">Trả lời</button>
    </div>
  );
}

export default Comment