import Navbar from '../components/Navbar'
import "./EasyGame.css"

function EasyGame() {

  return (
    <div>
      <Navbar />

      <h1>
        Easy Game Page
      </h1>
      <div className="timer">
            <input value="01:32" disabled/>
        </div>
        <table>
            <tr>
                <td>
                    <table className="subgrid">
                        <tr>
                            <td>
                                <input className="filledcell" disabled value="6"/>
                            </td>
                            <td>
                                <input className="filledcell" disabled value="2" />
                            </td>
                            <td>
                                <input type="text" maxlength="1"/> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table className="subgrid">
                        <tr>
                            <td>
                                <input className="filledcell" disabled value="5"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input className="filledcell" disabled value="3"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table className="subgrid">
                        <tr>
                            <td>
                                <input className="filledcell" disabled value="5"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input className="filledcell" disabled value="6"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table className="subgrid">
                        <tr>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input className="filledcell" disabled value="3"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input className="filledcell" disabled value="2"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table className="subgrid">
                        <tr>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="filledcell" disabled value="3"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input className="filledcell" disabled value="6"/>
                            </td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table className="subgrid">
                        <tr>
                            <td>
                                <input className="filledcell" disabled value="3"/>
                            </td>
                            <td>
                                <input className="filledcell" disabled value="4"/>
                            </td>
                            <td>
                                <input className="filledcell" disabled value="6"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                            <td>
                                <input type="text" maxlength="1"/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default EasyGame
