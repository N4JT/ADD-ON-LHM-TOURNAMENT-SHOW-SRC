import React from "react";
import { CSGO } from "csgogsi-socket";
import { Match } from "../../api/interfaces";
import Tournament from "../Tournament/Tournament";

interface Props {
  game: CSGO,
  match: Match | null
}

export default class Layout extends React.Component<Props> {

  render() {

    return (
      <div className="layout">
        <Tournament />
      </div>
    );
  }
}
