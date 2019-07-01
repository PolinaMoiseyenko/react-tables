import React, { Component } from 'react';
import { TableHeader, TableRow } from './Table';

class TableBC extends Component {
    render() {
        const { dataB, headersB, dataC, headersC } = this.props;

        return (
            <div id="table-bc">
            <div id="table-b">
                <table>
                    <tr>
                        {
                            headersB.map(header => {
                                return (<TableHeader header={header} />)
                            })
                        }
                    </tr>
                    {
                        dataB[0].map(row => {  // render table on click
                            return (<TableRow row={row} />)
                        })
                    }
                </table>
            </div>

            <div id="table-c">
                <table>
                    <tr>
                        {
                            headersC.map(header => {
                                return (<TableHeader header={header} />)
                            })
                        }
                    </tr>
                    {
                        dataC[0][0].map(row => {  // render table on click
                            return (<TableRow row={row} />)
                        })
                    }
                </table>
            </div>
            </div>
        );
    };
};

export default TableBC;