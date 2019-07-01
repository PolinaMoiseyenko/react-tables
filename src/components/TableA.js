import React, { Component } from 'react';
import {TableHeader, TableRow} from './Table';

class TableA extends Component {
    render() {
        const { data, headers } = this.props;

        return (
            <div id="table-a">
                <table>
                    <tr>
                        {
                            headers.map(header => {
                                return (<TableHeader header={ header } />)
                            })
                        }
                    </tr>
                    {
                        data.map(row => {
                            return (<TableRow row={ row } />)
                        })
                    }
                </table>
            </div>
        );
    };
};



export default TableA;