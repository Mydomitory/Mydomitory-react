import React from "react"
import '../../css/Main/ViewScore.css'

export default function ViewScore() {

  return (
    <div className="personalScore">
      <p className="score">Total :  5</p>

      <div className="WrapgoodScore">
        <p className="goodScoreTitle">상점</p>
        <p className="goodScoreContent">모범 호실</p>
        <p className="goodScore">8점</p>
      </div>

      <div className="WrapbadScore">
        <p className="badScoreTitle">벌점</p>
        <p className="badScoreContent">타호실 무단 출입</p>
        <p className="badScore">5점</p>
      </div>
    </div>
  )
}