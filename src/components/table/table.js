import React from 'react';
import './table.css'
/////
// rows format: [["row1String","row1String","row1String"], ["row2String","row2String","row2String"]]
// keys format: ["key1", "key2", "key3"]
// title format: "string"
// *Any of strings can contain plain HTML
/////
function style(cell) {
  return cell.length > 100 ? {textAlign: 'left', minWidth: '200px'} : {};
}
const Table = ({ title, keys, rows, settings }) => {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        className="inline-block min-w-full shadow overflow-hidden"
      >
        <table className="min-w-full leading-normal">
          <tbody>
          {title &&
            <tr>
              <td className="px-4 py-4" colSpan={keys ? keys.length : rows[0].length} dangerouslySetInnerHTML={{ __html: title }}></td>
            </tr>
          }
          {keys &&
            <tr>
              {keys.map((keyName) => (
                <th className="px-4 py-4" dangerouslySetInnerHTML={{ __html: keyName }}></th>
              ))}
            </tr>
          }
          {rows.map((row) => (
            <tr>
              {row.map((cell) => (
                <td style={style(cell)} className="px-4 py-4" dangerouslySetInnerHTML={{ __html: cell }}></td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
