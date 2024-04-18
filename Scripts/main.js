import { series } from './data.js';
function renderSeriesTable(series) {
    var table = document.createElement("table");
    table.classList.add("table", "table-bordered", "table-striped", "table-fixed");
    table.style.width = "50%"; 
    table.style.margin = "0 auto"; 
    var totalTemporadas = 0;
    var tableBody = series.map(function (serie) {
        totalTemporadas += serie.temporadas;
        return "\n      <tr>\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>\n      </tr>\n    ");
    }).join('');
    var averageTemporadas = Math.round(totalTemporadas / series.length); 
    table.innerHTML = "\n    <thead>\n        <tr>\n            <th>ID</th>\n            <th>Nombre</th>\n            <th>Canal</th>\n            <th>Temporadas</th>\n        </tr>\n    </thead>\n    <tbody>\n        ".concat(tableBody, "\n        <tr>\n            <td colspan=\"3\"><strong>Promedio de temporadas:</strong></td>\n            <td><strong>").concat(averageTemporadas, "</strong></td>         </tr>\n    </tbody>\n  ");
    document.body.appendChild(table);
}
window.onload = function () {
    renderSeriesTable(series);
};
