/**
 * VENDRIX Enterprise Suite - ENGINE CORE DE ARQUITECTURA MULTI-MÓDULO REACTIVA
 */

let DICCIONARIO_PRODUCTOS = {
    "1": { "nombre": "Agua San Luis 625ml", "precio": 2.50, "costo": 1.00 },
    "3": { "nombre": "Galleta Casino Menta", "precio": 1.20, "costo": 0.50 },
    "5": { "nombre": "Galleta Casino Vainilla", "precio": 1.50, "costo": 0.60 },
    "7": { "nombre": "Chocolates M&M", "precio": 2.50, "costo": 1.10 },
    "9": { "nombre": "Gaseosa Coca-Cola Zero", "precio": 2.00, "costo": 1.20 },
    "11": { "nombre": "Chocolate Sublime Gr", "precio": 2.00, "costo": 1.10 },
    "12": { "nombre": "Gaseosa Sprite 500ml", "precio": 1.20, "costo": 0.70 },
    "13": { "nombre": "Papas Lays Onduladas", "precio": 1.80, "costo": 1.00 },
    "14": { "nombre": "Doritos Mega Queso", "precio": 2.00, "costo": 1.10 },
    "15": { "nombre": "Cereal Bar Ángel", "precio": 2.00, "costo": 0.80 },
    "16": { "nombre": "Galleta Margarita 4pk", "precio": 1.30, "costo": 0.60 },
    "17": { "nombre": "Galleta Ritz", "precio": 1.50, "costo": 0.70 },
    "18": { "nombre": "Pringles Original Tarro", "precio": 3.80, "costo": 2.10 },
    "19": { "nombre": "Gaseosa Fanta Naranja", "precio": 1.20, "costo": 0.70 },
    "20": { "nombre": "Agua Cielo Sin Gas", "precio": 1.20, "costo": 0.50 },
    "21": { "nombre": "Galleta Morocha", "precio": 1.80, "costo": 0.90 },
    "22": { "nombre": "Galleta Charada Maní", "precio": 1.80, "costo": 0.90 },
    "23": { "nombre": "Chocolate Princesa", "precio": 1.80, "costo": 0.95 },
    "24": { "nombre": "Galleta Chomp Vainilla", "precio": 1.80, "costo": 0.90 },
    "25": { "nombre": "Gomitas Mogul Ositos", "precio": 2.00, "costo": 1.10 },
    "26": { "nombre": "Barra Proteica Max", "precio": 2.50, "costo": 1.30 },
    "27": { "nombre": "Papas Nativas Inka Chips", "precio": 1.50, "costo": 0.80 },
    "28": { "nombre": "Maní Cervecero Karinto", "precio": 1.80, "costo": 1.00 },
    "29": { "nombre": "Habas Saladas Karinto", "precio": 1.80, "costo": 0.90 },
    "30": { "nombre": "Platanitos Natuchips", "precio": 1.00, "costo": 0.50 },
    "31": { "nombre": "Gaseosa Inca Kola Sin Azúcar", "precio": 2.00, "costo": 1.20 },
    "33": { "nombre": "Galleta Soda Field", "precio": 2.00, "costo": 0.80 },
    "34": { "nombre": "Wafer Nik Vainilla", "precio": 1.50, "costo": 0.70 },
    "35": { "nombre": "Chocolate Snickers Bar", "precio": 2.00, "costo": 1.20 },
    "36": { "nombre": "Sublime Extremo Bar", "precio": 1.80, "costo": 1.00 },
    "37": { "nombre": "Galleta Blackout San Jorge", "precio": 1.80, "costo": 0.90 },
    "38": { "nombre": "Gomitas Ambrosoli Eucalipto", "precio": 2.00, "costo": 1.10 },
    "39": { "nombre": "Gaseosa Inca Kola 500ml", "precio": 1.30, "costo": 0.80 },
    "40": { "nombre": "Agua San Luis Con Gas", "precio": 1.50, "costo": 0.60 },
    "41": { "nombre": "Cuates Picantes Bolsa", "precio": 2.50, "costo": 1.30 },
    "42": { "nombre": "Papas Lays Al Hilo", "precio": 2.50, "costo": 1.30 },
    "43": { "nombre": "Galletas Oreo Regular", "precio": 2.00, "costo": 1.00 },
    "44": { "nombre": "Barra Cereal Quaker Avena", "precio": 2.00, "costo": 0.90 },
    "45": { "nombre": "Gaseosa Coca-Cola Regular", "precio": 2.00, "costo": 1.20 },
    "46": { "nombre": "Bizcocho Pingüinos Marinela", "precio": 2.00, "costo": 1.10 },
    "47": { "nombre": "Galleta Soda Field Crocante", "precio": 2.00, "costo": 0.80 },
    "48": { "nombre": "Gaseosa Fanta Kola Inglesa", "precio": 1.20, "costo": 0.70 },
    "49": { "nombre": "Papas Lays Clásicas", "precio": 2.00, "costo": 1.10 },
    "50": { "nombre": "Doritos Flamin Hot", "precio": 2.50, "costo": 1.30 },
    "51": { "nombre": "Cuates Queso Bolsa", "precio": 2.80, "costo": 1.40 },
    "52": { "nombre": "Wafer Costa Vainilla", "precio": 2.80, "costo": 1.35 },
    "53": { "nombre": "Gomitas Mogul Ácidas", "precio": 2.80, "costo": 1.40 },
    "54": { "nombre": "Gaseosa Inca Kola Regular", "precio": 2.80, "costo": 1.50 },
    "55": { "nombre": "Barra Proteica Whey Bar", "precio": 3.00, "costo": 1.60 },
    "56": { "nombre": "Maní Con Pasas Karinto", "precio": 1.50, "costo": 0.80 },
    "57": { "nombre": "Galleta Coronita Chocolate", "precio": 2.50, "costo": 1.20 },
    "58": { "nombre": "Chocolate Milky Way Bar", "precio": 3.00, "costo": 1.50 },
    "59": { "nombre": "Galleta Tentación Choc", "precio": 2.50, "costo": 1.30 },
    "60": { "nombre": "Nestlé Nesquik Chocolate", "precio": 1.50, "costo": 0.80 }
};

let DATABASE_STATE = [];
let STAGING_MEMORIA_TEMPORAL = []; 
let HISTORIAL_COMPRAS_LOTES = []; 
let HISTORIAL_GASTOS_EXTRA = []; 

// NUEVAS MATRICES DE DATOS PARA COMPRAS DE MÁQUINAS Y PROYECTOS GANTT
let REGISTRO_VENTAS_MAQUINAS = [];
let REGISTRO_PROYECTOS_GANTT = [];

let CURRENT_EDIT_LOTE_ID = null;
let chartHistory = null, chartPayments = null, chartTopProducts = null;
let dtInstance = null, dtDicMaster = null, dtSimulationOrder = null, dtGastosMaster = null, dtMachinesMaster = null;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('stockInvoiceDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('gastoDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('projStartDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('projEndDate').value = new Date().toISOString().split('T')[0];
    setupNavigation();
    setupUIEventListeners();
    loadApplicationData();
});

function setupNavigation() {
    const links = document.querySelectorAll('#main-nav .nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const targetId = link.getAttribute('href').substring(1);
            document.querySelectorAll('.content-view').forEach(view => { view.classList.add('d-none'); });
            document.getElementById(targetId).classList.remove('d-none');

            // Ocultar barra de filtros globales si se entra a proyectos o venta de máquinas para no estorbar
            const filterCard = document.getElementById('globalFilterCard');
            if(targetId === 'vendrix-ventas-section' || targetId === 'vendrix-proyectos-section') {
                filterCard.classList.add('d-none');
            } else {
                filterCard.classList.remove('d-none');
            }
        });
    });
}

function loadApplicationData() {
    const localStore = localStorage.getItem('vendrix_bi_stored_data');
    const localLotes = localStorage.getItem('vendrix_bi_stored_lotes');
    const localDic = localStorage.getItem('vendrix_bi_stored_dic');
    const localGastos = localStorage.getItem('vendrix_bi_stored_gastos');
    const localMachines = localStorage.getItem('vendrix_stored_machines');
    const localGantt = localStorage.getItem('vendrix_stored_gantt');

    if (localDic) DICCIONARIO_PRODUCTOS = JSON.parse(localDic);
    DATABASE_STATE = localStore ? JSON.parse(localStore) : [];
    HISTORIAL_GASTOS_EXTRA = localGastos ? JSON.parse(localGastos) : [];
    REGISTRO_VENTAS_MAQUINAS = localMachines ? JSON.parse(localMachines) : [];
    
    // Carga de hitos iniciales de Proyectos Gantt
    if(localGantt) {
        REGISTRO_PROYECTOS_GANTT = JSON.parse(localGantt);
    } else {
        REGISTRO_PROYECTOS_GANTT = [
            { id: "P1", cliente: "Corporativo Alfa", tarea: "Adquisición e Importación de Equipos", inicio: "2026-06-01", fin: "2026-06-10", responsable: "Logística", progreso: 100 },
            { id: "P2", cliente: "Sede Centro", tarea: "Negociación de Espacios y Permisos", inicio: "2026-06-08", fin: "2026-06-18", responsable: "Dirección", progreso: 75 },
            { id: "P3", cliente: "Sede Centro", tarea: "Instalación de Software y Monitoreo", inicio: "2026-06-15", fin: "2026-06-25", responsable: "Técnico BI", progreso: 25 }
        ];
        localStorage.setItem('vendrix_stored_gantt', JSON.stringify(REGISTRO_PROYECTOS_GANTT));
    }

    // Inicialización Lotes Base
    if (localLotes) {
        HISTORIAL_COMPRAS_LOTES = JSON.parse(localLotes);
    } else {
        Object.keys(DICCIONARIO_PRODUCTOS).forEach((code, idx) => {
            HISTORIAL_COMPRAS_LOTES.push({
                "id_lote": `LOTE-${idx}-${Date.now().toString().substring(8)}`,
                "num_factura": "FACT-INICIAL", "fecha_compra": "2026-05-01", "rawCode": code,
                "costo_total": (DICCIONARIO_PRODUCTOS[code].costo || 1.00) * 150, "descuento": 0, "cantidad": 150, "costo_unitario": DICCIONARIO_PRODUCTOS[code].costo || 1.00
            });
        });
        localStorage.setItem('vendrix_bi_stored_lotes', JSON.stringify(HISTORIAL_COMPRAS_LOTES));
    }

    buildStockSelectorAutoComplete(); 
    renderDicMasterTable();
    renderInvoiceHistoryTable();
    renderGastosMasterTable();
    renderMachineSalesMasterTable(); // Cargar tabla de máquinas
    renderGanttLiveChart(); // Dibujar Gantt
    populateSelectors(DATABASE_STATE);
    processAndRenderAll();
}

function setupUIEventListeners() {
    document.getElementById('btnPreviewPasteData').addEventListener('click', convertRawTextToStagingPreview);
    document.getElementById('btnCommitStagingData').addEventListener('click', commitStagingToDashboard);
    document.getElementById('formAddStock').addEventListener('submit', handleNewInvoiceSubmit);
    document.getElementById('formAddDicProduct').addEventListener('submit', handleDicProductSubmit);
    document.getElementById('btnCancelDicEdit').addEventListener('click', cancelDicEditMode);
    document.getElementById('formAddGasto').addEventListener('submit', handleNewGastoSubmit);
    
    // Escuchadores de nuevos formularios matriciales
    document.getElementById('formAddMachineSale').addEventListener('submit', handleNewMachineSaleSubmit);
    document.getElementById('formAddProyectoTask').addEventListener('submit', handleNewProyectoTaskSubmit);

    document.getElementById('stockProductSelectorAutoComplete').addEventListener('change', (e) => {
        document.getElementById('stockProductCode').value = e.target.value;
    });

    document.getElementById('btnForceRefreshGlobal').addEventListener('click', () => { processAndRenderAll(); alert("¡Plataforma unificada actualizada!"); });
    ['filterStartDate', 'filterEndDate', 'filterPayment', 'filterMachine'].forEach(id => {
        document.getElementById(id).addEventListener('change', processAndRenderAll);
    });

    document.getElementById('btnResetFilters').addEventListener('click', () => {
        document.getElementById('filterStartDate').value = ''; document.getElementById('filterEndDate').value = '';
        document.getElementById('filterPayment').value = 'TODOS'; document.getElementById('filterMachine').value = 'TODOS';
        processAndRenderAll();
    });

    document.getElementById('btnClearData').addEventListener('click', () => {
        if(confirm("¿Anular toda la base de datos local?")) { localStorage.clear(); location.reload(); }
    });
}

function buildStockSelectorAutoComplete() {
    const select = document.getElementById('stockProductSelectorAutoComplete'); if (!select) return;
    select.innerHTML = '<option value="" selected disabled>Selecciona un snack por su nombre comercial...</option>';
    let sortedKeys = Object.keys(DICCIONARIO_PRODUCTOS).sort((a, b) => DICCIONARIO_PRODUCTOS[a].nombre.localeCompare(DICCIONARIO_PRODUCTOS[b].nombre));
    sortedKeys.forEach(code => { select.innerHTML += `<option value="${code}">${DICCIONARIO_PRODUCTOS[code].nombre} (Casilla: ${code})</option>`; });
}

// ========================================================
// CONTROLES DE LA NUEVA PESTAÑA: VENDRIX VENTAS (MÁQUINAS)
// ========================================================
function handleNewMachineSaleSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('machId').value.trim();
    const cFactory = parseFloat(document.getElementById('machCostFactory').value) || 0;
    const cLogistics = parseFloat(document.getElementById('machCostLogistics').value) || 0;
    const cPeripherals = parseFloat(document.getElementById('machCostPeripherals').value) || 0;
    const cLabor = parseFloat(document.getElementById('machCostLabor').value) || 0;
    const priceFinal = parseFloat(document.getElementById('machPriceFinal').value) || 0;

    const totalCostoNeto = cFactory + cLogistics + cPeripherals + cLabor;
    const gananciaLiquida = priceFinal - totalCostoNeto;
    const markupPct = totalCostoNeto > 0 ? (gananciaLiquida / totalCostoNeto) * 100 : 0;

    REGISTRO_VENTAS_MAQUINAS.push({
        id_mach: `M-${Date.now()}`, modelo: id, costo_fabrica_log: cFactory + cLogistics,
        costo_setup: cPeripherals + cLabor, costo_total: totalCostoNeto, precio_venta: priceFinal,
        ganancia: gananciaLiquida, markup: markupPct
    });

    localStorage.setItem('vendrix_stored_machines', JSON.stringify(REGISTRO_VENTAS_MAQUINAS));
    document.getElementById('formAddMachineSale').reset();
    renderMachineSalesMasterTable();
    alert("¡Estructura de venta y márgenes de la máquina guardada correctamente!");
}

function renderMachineSalesMasterTable() {
    const tbody = document.querySelector('#tableMachineSalesMaster tbody'); if(!tbody) return;
    if (dtMachinesMaster) dtMachinesMaster.destroy();
    tbody.innerHTML = '';

    REGISTRO_VENTAS_MAQUINAS.forEach(m => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${m.modelo}</strong></td>
                <td class="text-end font-monospace">S/ ${m.costo_fabrica_log.toFixed(2)}</td>
                <td class="text-end font-monospace">S/ ${m.costo_setup.toFixed(2)}</td>
                <td class="text-end font-monospace text-danger fw-bold">S/ ${m.costo_total.toFixed(2)}</td>
                <td class="text-end font-monospace text-primary fw-bold">S/ ${m.precio_venta.toFixed(2)}</td>
                <td class="text-end font-monospace text-success fw-bold">S/ ${m.ganancia.toFixed(2)}</td>
                <td class="text-end font-monospace text-warning fw-bold bg-warning bg-opacity-10">${m.markup.toFixed(1)}%</td>
                <td class="text-center"><button class="btn btn-xs btn-outline-danger py-0 px-2" onclick="deleteMachineSaleField('${m.id_mach}')"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;
    });

    dtMachinesMaster = $('#tableMachineSalesMaster').DataTable({
        destroy: true, pageLength: 5, dom: 'Bfrtip',
        buttons: [{ extend: 'excelHtml5', text: '<i class="fa-solid fa-file-excel me-1"></i> Descargar Reporte de Máquinas (Excel)', className: 'btn btn-success btn-sm mt-2' }],
        language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' }
    });
}

function deleteMachineSaleField(id) {
    if(confirm("¿Eliminar registro de esta máquina?")) {
        REGISTRO_VENTAS_MAQUINAS = REGISTRO_VENTAS_MAQUINAS.filter(m => m.id_mach !== id);
        localStorage.setItem('vendrix_stored_machines', JSON.stringify(REGISTRO_VENTAS_MAQUINAS));
        renderMachineSalesMasterTable();
    }
}

// ========================================================
// CONTROLES DE LA NUEVA PESTAÑA: VENDRIX PROYECTOS (GANTT)
// ========================================================
function handleNewProyectoTaskSubmit(e) {
    e.preventDefault();
    const client = document.getElementById('projClientName').value.trim();
    const task = document.getElementById('projTaskName').value.trim();
    const start = document.getElementById('projStartDate').value;
    const end = document.getElementById('projEndDate').value;
    const user = document.getElementById('projUser').value.trim();
    const progress = parseInt(document.getElementById('projProgressPct').value) || 100;

    REGISTRO_PROYECTOS_GANTT.push({
        id: `P-${Date.now()}`, cliente: client, tarea: task, inicio: start, fin: end, responsable: user, progreso: progress
    });

    localStorage.setItem('vendrix_stored_gantt', JSON.stringify(REGISTRO_PROYECTOS_GANTT));
    document.getElementById('formAddProyectoTask').reset();
    renderGanttLiveChart();
    alert("¡Hito inyectado al diagrama de Gantt en vivo!");
}

function renderGanttLiveChart() {
    const wrapper = document.getElementById('ganttLiveWrapperContainer'); if(!wrapper) return;
    wrapper.innerHTML = '';

    if(REGISTRO_PROYECTOS_GANTT.length === 0) {
        wrapper.innerHTML = '<div class="text-center text-muted p-4">No hay actividades registradas en el cronograma.</div>';
        return;
    }

    REGISTRO_PROYECTOS_GANTT.forEach((p, idx) => {
        // Alternar colores estéticos elegantes para las barras
        const colorClass = idx % 3 === 0 ? 'bg-primary' : (idx % 3 === 1 ? 'bg-success' : 'bg-warning text-dark');
        
        wrapper.innerHTML += `
            <div class="gantt-row-item">
                <div class="gantt-label-task">
                    <strong>${p.cliente}</strong><br>
                    <small class="text-muted">${p.tarea}</small>
                </div>
                <div class="gantt-bar-wrapper">
                    <div class="gantt-bar-fill ${colorClass}" style="width: ${p.progreso}%;">
                        ${p.progreso}% [${p.responsable}] (${p.inicio} al ${p.fin})
                    </div>
                </div>
                <div class="ms-2">
                    <i class="fa-solid fa-circle-minus text-danger" style="cursor:pointer;" onclick="deleteGanttTaskField('${p.id}')"></i>
                </div>
            </div>
        `;
    });
}

function deleteGanttTaskField(id) {
    if(confirm("¿Eliminar actividad del cronograma Gantt?")) {
        REGISTRO_PROYECTOS_GANTT = REGISTRO_PROYECTOS_GANTT.filter(p => p.id !== id);
        localStorage.setItem('vendrix_stored_gantt', JSON.stringify(REGISTRO_PROYECTOS_GANTT));
        renderGanttLiveChart();
    }
}

// CONTROLES MÓDULO EGRESOS OPERATIVOS EXTRA
function handleNewGastoSubmit(e) {
    e.preventDefault();
    const gNum = document.getElementById('gastoNum').value.trim();
    const gDate = document.getElementById('gastoDate').value;
    const gAmount = parseFloat(document.getElementById('gastoAmount').value) || 0;
    const gReason = document.getElementById('gastoReason').value.trim();
    const gUser = document.getElementById('gastoUser').value.trim();
    const gObs = document.getElementById('gastoObs').value.trim() || 'Ninguna';
    
    HISTORIAL_GASTOS_EXTRA.push({
        "id_gasto": `GASTO-${Date.now()}`, num_comprobante: gNum, fecha: gDate, monto: gAmount, motivo: gReason, responsable: gUser, observacion: gObs, adjunto: "Boleta.pdf", completo: true
    });
    localStorage.setItem('vendrix_bi_stored_gastos', JSON.stringify(HISTORIAL_GASTOS_EXTRA));
    document.getElementById('formAddGasto').reset();
    document.getElementById('gastoDate').value = new Date().toISOString().split('T')[0];
    renderGastosMasterTable(); alert("¡Egreso guardado!");
}

function renderGastosMasterTable() {
    const tbody = document.querySelector('#tableGastosMaster tbody'); if (!tbody) return;
    if (dtGastosMaster) dtGastosMaster.destroy(); tbody.innerHTML = '';
    HISTORIAL_GASTOS_EXTRA.forEach(g => {
        tbody.innerHTML += `
            <tr>
                <td class="font-monospace fw-bold">${g.num_comprobante}</td><td>${g.fecha}</td>
                <td class="text-end fw-bold text-danger">S/ ${g.monto.toFixed(2)}</td><td>${g.motivo}</td><td>${g.responsable}</td><td>${g.observacion}</td>
                <td class="text-center text-primary"><i class="fa-solid fa-file-pdf fs-5" style="cursor:pointer;" onclick="alert('Abriendo boleta adjunta digital.')"></i></td>
                <td class="text-center"><div class="form-check form-switch d-inline-block"><input class="form-check-input" type="checkbox" ${g.completo ? 'checked':''} onclick="toggleGastoStatus('${g.id_gasto}')"><label class="form-check-label small fw-bold text-${g.completo?'success':'warning'}">${g.completo ? 'Completo':'Pendiente'}</label></div></td>
                <td class="text-center"><button class="btn btn-xs btn-outline-danger py-0 px-2" onclick="deleteGastoField('${g.id_gasto}')"><i class="fa-solid fa-trash-can"></i></button></td>
            </tr>
        `;
    });
    dtGastosMaster = $('#tableGastosMaster').DataTable({ destroy: true, pageLength: 5, order: [[1, 'desc']], language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' } });
}

function toggleGastoStatus(id) {
    let gasto = HISTORIAL_GASTOS_EXTRA.find(g => g.id_gasto === id);
    if(gasto) { gasto.completo = !gasto.completo; localStorage.setItem('vendrix_bi_stored_gastos', JSON.stringify(HISTORIAL_GASTOS_EXTRA)); renderGastosMasterTable(); }
}

function deleteGastoField(id) {
    if(confirm("¿Borrar egreso?")) { HISTORIAL_GASTOS_EXTRA = HISTORIAL_GASTOS_EXTRA.filter(g => g.id_gasto !== id); localStorage.setItem('vendrix_bi_stored_gastos', JSON.stringify(HISTORIAL_GASTOS_EXTRA)); renderGastosMasterTable(); }
}

// CATÁLOGO COMERCIAL
function renderDicMasterTable() {
    const tbody = document.querySelector('#tableDicMaster tbody'); if (!tbody) return;
    if (dtDicMaster) { dtDicMaster.destroy(); } tbody.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).forEach(code => {
        const p = DICCIONARIO_PRODUCTOS[code], costoReal = p.costo || 0, precioVenta = p.precio || 0, margenDinero = precioVenta - costoReal, margenPorcentaje = precioVenta > 0 ? (margenDinero / precioVenta) * 100 : 0, markupPorcentaje = costoReal > 0 ? (margenDinero / costoReal) * 100 : 0;
        tbody.innerHTML += `
            <tr>
                <td class="font-monospace fw-bold">COD-${code}</td><td><strong>${p.nombre}</strong></td><td class="text-end font-monospace text-danger text-opacity-75">S/ ${costoReal.toFixed(2)}</td><td class="text-end font-monospace text-primary fw-bold">S/ ${precioVenta.toFixed(2)}</td><td class="text-end font-monospace text-success fw-bold">S/ ${margenDinero.toFixed(2)}</td><td class="text-end font-monospace text-success">${margenPorcentaje.toFixed(1)}%</td><td class="text-end font-monospace text-warning fw-bold bg-warning bg-opacity-10">${markupPorcentaje.toFixed(1)}%</td>
                <td class="text-center"><button class="btn btn-xs btn-outline-primary py-0 px-2 small me-1" onclick="editDicProductField('${code}')"><i class="fa-solid fa-pen"></i></button><button class="btn btn-xs btn-outline-danger py-0 px-2 small" onclick="deleteDicProductField('${code}')"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`;
    });
    dtDicMaster = $('#tableDicMaster').DataTable({ destroy: true, pageLength: 10, dom: 'Bfrtip', buttons: [{ extend: 'excelHtml5', text: '<i class="fa-solid fa-file-excel me-1"></i> Descargar Catálogo (Excel)', className: 'btn btn-success btn-sm mt-2' }], order: [[4, 'desc']], language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' } });
}

function editDicProductField(code) {
    const p = DICCIONARIO_PRODUCTOS[code]; if (!p) return;
    document.getElementById('dicProductCode').value = code; document.getElementById('dicProductCode').disabled = true; document.getElementById('dicProductName').value = p.nombre; document.getElementById('dicProductPrice').value = p.precio;
    document.getElementById('dicFormTitle').innerHTML = `<i class="fa-solid fa-pen text-warning me-2"></i>Editar Producto COD-${code}`;
}

function deleteDicProductField(code) {
    if (confirm("¿Borrar del catálogo?")) { delete DICCIONARIO_PRODUCTOS[code]; localStorage.setItem('vendrix_bi_stored_dic', JSON.stringify(DICCIONARIO_PRODUCTOS)); renderDicMasterTable(); processAndRenderAll(); }
}

function cancelDicEditMode() {
    document.getElementById('formAddDicProduct').reset(); document.getElementById('dicProductCode').disabled = false; document.getElementById('dicFormTitle').innerHTML = `<i class="fa-solid fa-circle-plus me-2"></i>Registrar / Editar Producto`;
}

// FACTURACIÓN DE STOCK EN ALMACÉN
function handleNewInvoiceSubmit(e) {
    e.preventDefault();
    const invoiceNum = document.getElementById('stockInvoiceNum').value.trim();
    const code = document.getElementById('stockProductCode').value.trim().toUpperCase().replace('COD-', '');
    const dateInvoice = document.getElementById('stockInvoiceDate').value;
    const qty = parseInt(document.getElementById('stockQty').value) || 0;
    const totalCost = parseFloat(document.getElementById('stockTotalCost').value) || 0;
    const discount = parseFloat(document.getElementById('stockDiscount').value) || 0;

    if (code && dateInvoice && qty > 0 && totalCost >= 0) {
        const unitCostCalculated = (totalCost - discount) / qty;
        if (!DICCIONARIO_PRODUCTOS[code]) { DICCIONARIO_PRODUCTOS[code] = { "nombre": `Snack Casilla ${code}`, "precio": unitCostCalculated * 1.5, "costo": unitCostCalculated }; } 
        else { DICCIONARIO_PRODUCTOS[code].costo = unitCostCalculated; }
        localStorage.setItem('vendrix_bi_stored_dic', JSON.stringify(DICCIONARIO_PRODUCTOS));

        if (CURRENT_EDIT_LOTE_ID) {
            let loteObj = HISTORIAL_COMPRAS_LOTES.find(l => l.id_lote === CURRENT_EDIT_LOTE_ID);
            if (loteObj) { loteObj.num_factura = invoiceNum; loteObj.fecha_compra = dateInvoice; loteObj.rawCode = code; loteObj.costo_total = totalCost; loteObj.descuento = discount; loteObj.cantidad = qty; loteObj.costo_unitario = unitCostCalculated; }
            CURRENT_EDIT_LOTE_ID = null; document.getElementById('stockFormTitle').innerHTML = `<i class="fa-solid fa-file-invoice-dollar me-2"></i>Registrar Factura de Compra`;
        } else {
            HISTORIAL_COMPRAS_LOTES.push({ "id_lote": `LOTE-${Date.now()}-${Math.random().toString().substring(5)}`, num_factura: invoiceNum, fecha_compra: dateInvoice, rawCode: code, costo_total: totalCost, descuento: discount, cantidad: qty, costo_unitario: unitCostCalculated });
        }
        localStorage.setItem('vendrix_bi_stored_lotes', JSON.stringify(HISTORIAL_COMPRAS_LOTES));
        document.getElementById('stockInvoiceNum').value = ''; document.getElementById('stockProductSelectorAutoComplete').value = ''; document.getElementById('stockProductCode').value = ''; document.getElementById('stockQty').value = ''; document.getElementById('stockTotalCost').value = ''; document.getElementById('stockDiscount').value = '0.00';
        renderDicMasterTable(); renderInvoiceHistoryTable(); processAndRenderAll(); alert("¡Factura Procesada!");
    }
}

function renderInvoiceHistoryTable() {
    const tbody = document.querySelector('#tableInvoiceHistory tbody'); if (!tbody) return;
    tbody.innerHTML = ''; let sortedLotes = [...HISTORIAL_COMPRAS_LOTES].sort((a,b) => b.fecha_compra.localeCompare(a.fecha_compra));
    if(sortedLotes.length === 0) { tbody.innerHTML = `<tr><td colspan="9" class="text-center text-muted">No hay facturas.</td></tr>`; return; }
    sortedLotes.forEach(l => {
        const prod = DICCIONARIO_PRODUCTOS[l.rawCode];
        tbody.innerHTML += `
            <tr>
                <td class="font-monospace fw-bold">${l.num_factura || 'S/N'}</td><td>${l.fecha_compra}</td><td class="font-monospace">COD-${l.rawCode}</td><td><strong>${prod ? prod.nombre : "Producto Nuevo"}</strong></td><td class="text-end font-monospace">S/ ${parseFloat(l.costo_total || 0).toFixed(2)}</td><td class="text-end font-monospace text-muted">S/ ${parseFloat(l.descuento || 0).toFixed(2)}</td><td class="text-end font-monospace fw-bold">${l.cantidad} ud.</td><td class="text-end font-monospace text-primary fw-bold bg-primary bg-opacity-10">S/ ${parseFloat(l.costo_unitario || 0).toFixed(2)}</td>
                <td class="text-center"><button class="btn btn-xs btn-outline-primary py-0 px-2 me-1" onclick="editInvoiceLoteField('${l.id_lote}')"><i class="fa-solid fa-pen"></i></button><button class="btn btn-xs btn-outline-danger py-0 px-2" onclick="deleteInvoiceLote('${l.id_lote}')"><i class="fa-solid fa-trash-can"></i></button></td>
            </tr>`;
    });
}

function editInvoiceLoteField(id) {
    let loteObj = HISTORIAL_COMPRAS_LOTES.find(l => l.id_lote === id); if (!loteObj) return;
    CURRENT_EDIT_LOTE_ID = id; document.getElementById('stockInvoiceNum').value = loteObj.num_factura || ''; document.getElementById('stockProductSelectorAutoComplete').value = loteObj.rawCode; document.getElementById('stockProductCode').value = loteObj.rawCode; document.getElementById('stockInvoiceDate').value = loteObj.fecha_compra; document.getElementById('stockQty').value = loteObj.cantidad; document.getElementById('stockTotalCost').value = loteObj.costo_total || 0; document.getElementById('stockDiscount').value = loteObj.descuento || 0;
    document.getElementById('stockFormTitle').innerHTML = `<i class="fa-solid fa-pen text-warning me-2"></i>Corregir Factura ${loteObj.num_factura || ''}`;
}

function deleteInvoiceLote(id) {
    if(confirm("¿Borrar factura?")) { HISTORIAL_COMPRAS_LOTES = HISTORIAL_COMPRAS_LOTES.filter(l => l.id_lote !== id); localStorage.setItem('vendrix_bi_stored_lotes', JSON.stringify(HISTORIAL_COMPRAS_LOTES)); renderInvoiceHistoryTable(); processAndRenderAll(); }
}

function convertRawTextToStagingPreview() {
    const rawText = document.getElementById('rawCsvPasteData').value.trim(); if(!rawText) return;
    const lines = rawText.split(/\r?\n/); STAGING_MEMORIA_TEMPORAL = []; let divisor = '\t'; if (!lines[0].includes('\t')) { divisor = lines[0].includes(';') ? ';' : ','; }
    for (let i = 0; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        let row = lines[i].split(divisor).map(cell => cell.trim().replace(/"/g, '')); if (row[0].toUpperCase().includes("FECHA") || row[1].toUpperCase().includes("STATUS")) continue;
        let rawDate = row[0] || "", estado = (row[1] || "ACEPTADA").toUpperCase().trim(), rawValor = row[2] || "0.00", codeStr = (row[3] || "").trim(), periferico = row[4] || "", tecnologia = row[6] || ""; if (estado !== "ACEPTADA") continue;
        let valorNumerico = parseFloat(rawValor.replace(/[^0-9,\.-]/g, '').replace(',', '.')) || 0; let isoDate = "2026-06-20", timeShort = "12:00";
        if (rawDate.includes(' ')) { let parts = rawDate.split(' '); timeShort = parts[1].substring(0, 5); let dateParts = parts[0].split(/[-/]/); if (dateParts.length === 3) isoDate = dateParts[0].length === 4 ? `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}` : `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;}
        let pago = "Otros", pUpper = periferico.toUpperCase(), tUpper = tecnologia.toUpperCase();
        if (pUpper.includes("EFECTIVO")) pago = "Efectivo"; else if (pUpper.includes("TARJETA")) pago = tUpper.includes("QR") ? ((i % 2 === 0) ? "Yape" : "Plin") : "Tarjeta";
        let prodMeta = DICCIONARIO_PRODUCTOS[codeStr];
        STAGING_MEMORIA_TEMPORAL.push({ id: `V_${i}_${Date.now().toString().substring(8)}`, fecha: isoDate, hora: timeShort, maquina: "VENDRIX Central", codigo: `COD-${codeStr}`, rawCode: codeStr, producto: prodMeta ? prodMeta.nombre : `Snack Nuevo`, estado: estado, pago: pago, cantidad: 1, valor: valorNumerico });
    }
    const tbody = document.querySelector('#tableStagingPreview tbody'); tbody.innerHTML = '';
    STAGING_MEMORIA_TEMPORAL.forEach(r => { tbody.innerHTML += `<tr><td>${r.fecha}</td><td>${r.hora}</td><td>${r.maquina}</td><td>${r.codigo}</td><td><span class="badge bg-light text-dark border">${r.producto}</span></td><td><span class="badge bg-success">ACEPTADA</span></td><td><span class="badge bg-primary">${r.pago}</span></td><td class="text-end">${r.cantidad}</td><td class="text-end text-success fw-bold">S/ ${r.valor.toFixed(2)}</td></tr>`; });
    document.getElementById('stagingCardContainer').classList.remove('d-none');
}

function commitStagingToDashboard() {
    if (STAGING_MEMORIA_TEMPORAL.length === 0) return;
    if (confirm("¿Aprobar transacciones?")) { DATABASE_STATE = [...STAGING_MEMORIA_TEMPORAL]; localStorage.setItem('vendrix_bi_stored_data', JSON.stringify(DATABASE_STATE)); document.getElementById('rawCsvPasteData').value = ''; document.getElementById('stagingCardContainer').classList.add('d-none'); populateSelectors(DATABASE_STATE); processAndRenderAll(); document.querySelector('#main-nav a[href="#dashboard-section"]').click(); }
}

function populateSelectors(data) {
    const payments = new Set(), machines = new Set(); data.forEach(r => { if(r.pago) payments.add(r.pago); if(r.maquina) machines.add(r.maquina); });
    const pSel = document.getElementById('filterPayment'), mSel = document.getElementById('filterMachine');
    if(pSel && mSel) { const currentP = pSel.value, currentM = mSel.value; pSel.innerHTML = '<option value="TODOS">Todos los Medios</option>'; mSel.innerHTML = '<option value="TODOS">Todas las Máquinas</option>'; payments.forEach(p => pSel.innerHTML += `<option value="${p}">${p}</option>`); machines.forEach(m => mSel.innerHTML += `<option value="${m}">${m}</option>`); pSel.value = currentP ? currentP : 'TODOS'; mSel.value = currentM ? currentM : 'TODOS'; }
}

function processAndRenderAll() {
    const sDate = document.getElementById('filterStartDate').value; const eDate = document.getElementById('filterEndDate').value;
    const paymentSel = document.getElementById('filterPayment').value; const machineSel = document.getElementById('filterMachine').value;
    let filtered = DATABASE_STATE.filter(r => {
        if (sDate && r.fecha < sDate) return false; if (eDate && r.fecha > eDate) return false;
        if (paymentSel !== 'TODOS' && r.pago !== paymentSel) return false; if (machineSel !== 'TODOS' && r.maquina !== machineSel) return false; return true;
    });
    renderKPIs(filtered); renderMetaAnual(filtered); renderHistoryChart(filtered); renderPaymentsChart(filtered); renderTopProductsSection(filtered); renderAdvancedProducts(filtered); renderDataTableSection(filtered); renderStockKardexModule(filtered); renderSimulationOrderTable(filtered);
}

function renderKPIs(data) {
    const totalSales = data.reduce((sum, r) => sum + r.valor, 0); const totalQty = data.reduce((sum, r) => sum + r.cantidad, 0);
    let gananciaRealExacta = 0; data.forEach(r => { const meta = DICCIONARIO_PRODUCTOS[r.rawCode]; if (meta && meta.costo > 0) { gananciaRealExacta += (r.valor - meta.costo); } else { gananciaRealExacta += (r.valor * 0.40); } });
    const dates = data.map(r => r.fecha); const maxDate = dates.length > 0 ? dates.sort().pop() : ''; const todaySales = data.filter(r => r.fecha === maxDate).reduce((sum, r) => sum + r.valor, 0); const avgTicket = data.length > 0 ? (totalSales / data.length) : 0;
    document.getElementById('titleTodayKpi').innerText = maxDate ? `Ventas del ${maxDate}` : "Ventas Último Día";
    document.getElementById('kpiTotalSales').innerText = `S/ ${totalSales.toFixed(2)}`; document.getElementById('kpiTodaySales').innerText = `S/ ${todaySales.toFixed(2)}`; document.getElementById('kpiTotalQty').innerText = totalQty; document.getElementById('kpiAvgTicket').innerText = `S/ ${avgTicket.toFixed(2)}`; document.getElementById('kpiTotalProfit').innerText = `S/ ${gananciaRealExacta.toFixed(2)}`;
}

function renderMetaAnual(data) {
    const META_ANUAL = 15000; const accumulated = data.reduce((sum, r) => sum + r.valor, 0); let totalProfit = 0; data.forEach(r => { const meta = DICCIONARIO_PRODUCTOS[r.rawCode]; if (meta && meta.costo > 0) totalProfit += (r.valor - meta.costo); else totalProfit += (r.valor * 0.40); });
    const percentage = Math.min((accumulated / META_ANUAL) * 100, 100); const missing = Math.max(META_ANUAL - accumulated, 0);
    document.getElementById('metaPercentage').innerText = `${percentage.toFixed(1)}%`; document.getElementById('metaProgressBar').style.width = `${percentage}%`; document.getElementById('metaAccumulated').innerText = `S/ ${accumulated.toFixed(2)}`; document.getElementById('metaProfit').innerText = `S/ ${totalProfit.toFixed(2)}`; document.getElementById('metaMissing').innerText = `S/ ${missing.toFixed(2)}`;
}

function renderHistoryChart(data) {
    const canvas = document.getElementById('chartHistory'); if (!canvas) return;
    const ctx = canvas.getContext('2d'); const grouped = {}; data.forEach(r => { grouped[r.fecha] = (grouped[r.fecha] || 0) + r.valor; });
    let sortedDates = Object.keys(grouped).sort();
    if (chartHistory) chartHistory.destroy();
    chartHistory = new Chart(ctx, { type: 'line', data: { labels: sortedDates, datasets: [{ label: 'Ventas (S/)', data: sortedDates.map(d => grouped[d]), borderColor: '#1e40af', backgroundColor: 'rgba(59, 130, 246, 0.05)', fill: true, tension: 0.1 }] }, options: { responsive: true, maintainAspectRatio: false } });
}

function renderPaymentsChart(data) {
    const canvas = document.getElementById('chartPayments'); if (!canvas) return;
    const ctx = canvas.getContext('2d'); const group = {}; data.forEach(r => { group[r.pago] = (group[r.pago] || 0) + r.valor; });
    if (chartPayments) chartPayments.destroy();
    chartPayments = new Chart(ctx, { type: 'doughnut', data: { labels: Object.keys(group), datasets: [{ data: Object.values(group), backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899'] }] }, options: { responsive: true, maintainAspectRatio: false } });
}

function renderTopProductsSection(data) {
    const metrics = {}; data.forEach(r => { if(!metrics[r.codigo]) metrics[r.codigo] = { nombre: r.producto, qty: 0, total: 0 }; metrics[r.codigo].qty += r.cantidad; metrics[r.codigo].total += r.valor; });
    const sorted = Object.keys(metrics).map(c => ({ codigo: c, ...metrics[c] })).sort((a,b) => b.qty - a.qty).slice(0, 10);
    const tbody = document.querySelector('#tableTopProducts tbody'); if(tbody) { tbody.innerHTML = ''; sorted.forEach((p, idx) => { tbody.innerHTML += `<tr><td><span class="badge ${idx < 3 ? 'bg-warning text-dark' : 'bg-secondary'}">${idx + 1}</span></td><td class="font-monospace fw-bold">${p.codigo}</td><td>${p.nombre}</td><td class="text-end fw-bold">${p.qty}</td><td class="text-end text-success">S/ ${p.total.toFixed(2)}</td></tr>`; }); }
    const canvas = document.getElementById('chartTopProducts'); if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (chartTopProducts) chartTopProducts.destroy();
    chartTopProducts = new Chart(ctx, { type: 'bar', data: { labels: sorted.map(p => p.codigo), datasets: [{ label: 'Unidades', data: sorted.map(p => p.qty), backgroundColor: '#3b82f6' }] }, options: { responsive: true, maintainAspectRatio: false } });
}

function renderAdvancedProducts(data) {
    const metrics = {}; data.forEach(r => { if(!metrics[r.codigo]) metrics[r.codigo] = { nombre: r.producto, qty: 0, total: 0 }; metrics[r.codigo].qty += r.cantidad; metrics[r.codigo].total += r.valor; });
    const arr = Object.keys(metrics).map(c => ({ codigo: c, ...metrics[c] })); const menosVendidos = [...arr].sort((a,b) => a.qty - b.qty).slice(0, 5);
    const listMargen = Object.keys(DICCIONARIO_PRODUCTOS).map(code => { let p = DICCIONARIO_PRODUCTOS[code]; return { codigo: `COD-${code}`, nombre: p.nombre, margen: (p.precio - (p.costo || 0)) }; }).sort((a,b) => b.margen - a.margen).slice(0, 3);
    const comprasTotalesPorCodigo = {}; HISTORIAL_COMPRAS_LOTES.forEach(l => { comprasTotalesPorCodigo[l.rawCode] = (comprasTotalesPorCodigo[l.rawCode] || 0) + l.cantidad; });
    const listDebenVenderse = Object.keys(comprasTotalesPorCodigo).map(code => { const compras = comprasTotalesPorCodigo[code] || 0; const ventas = metrics[`COD-${code}`] ? metrics[`COD-${code}`].qty : 0; const stockRestante = compras - ventas; return { codigo: `COD-${code}`, nombre: DICCIONARIO_PRODUCTOS[code] ? DICCIONARIO_PRODUCTOS[code].nombre : 'Snack', stock: stockRestante }; }).sort((a,b) => b.stock - a.stock).slice(0, 3);
    const fillList = (id, items, badgeClass, suffix) => { const list = document.getElementById(id); if(!list) return; list.innerHTML = ''; items.forEach(p => { let val = suffix === 'S/' ? `S/ ${p.margen.toFixed(2)}` : (suffix === 'ud.' ? `${p.qty} ud.` : `${p.stock} ud.`); list.innerHTML += `<li class="list-group-item bg-transparent d-flex justify-content-between align-items-center px-0 py-1 small border-0"><span><strong>${p.codigo}</strong> <small class="text-muted">(${p.nombre})</small></span><span class="badge ${badgeClass}">${val}</span></li>`; }); };
    fillList('listProfitable', listMargen, 'bg-success', 'S/'); fillList('listLessSold', menosVendidos, 'bg-warning text-dark', 'ud.'); fillList('listNoMovement', listDebenVenderse, 'bg-danger', 'stock');
}

function renderStockKardexModule(data) {
    const sDate = document.getElementById('filterStartDate').value; const eDate = document.getElementById('filterEndDate').value;
    const ventasPorCodigo = {}; data.forEach(r => { const codeNum = r.codigo.replace('COD-', ''); ventasPorCodigo[codeNum] = (ventasPorCodigo[codeNum] || 0) + r.cantidad; });
    const comprasTotalesPorCodigo = {};
    HISTORIAL_COMPRAS_LOTES.forEach(l => {
        if (sDate && l.fecha_compra < sDate) return; if (eDate && l.fecha_compra > eDate) return;
        comprasTotalesPorCodigo[l.rawCode] = (comprasTotalesPorCodigo[l.rawCode] || 0) + l.cantidad;
    });
    const todosLosCodigos = new Set([...Object.keys(comprasTotalesPorCodigo), ...Object.keys(ventasPorCodigo)]);
    const tbody = document.querySelector('#tableStockKardex tbody'); if(!tbody) return; tbody.innerHTML = '';
    todosLosCodigos.forEach(code => {
        if(code === "" || code.includes('undefined') || code === "Cod Sel") return;
        const compras = comprasTotalesPorCodigo[code] || 0, ventas = ventasPorCodigo[code] || 0, stockActual = compras - ventas;
        let badgeAlerta = '<span class="badge bg-success">Abastecido</span>'; if (stockActual <= 0) badgeAlerta = '<span class="badge bg-danger">Quiebre</span>'; else if (stockActual <= 5) badgeAlerta = '<span class="badge bg-warning text-dark">Bajo Stock</span>';
        const meta = DICCIONARIO_PRODUCTOS[code];
        tbody.innerHTML += `<tr><td class="font-monospace fw-bold">COD-${code}</td><td><strong>${meta ? meta.nombre : 'No registrado'}</strong></td><td class="text-end font-monospace text-danger fw-bold">S/ ${(meta && meta.costo > 0) ? meta.costo.toFixed(2) : '0.00'}</td><td class="text-end text-success font-monospace fw-bold">${compras}</td><td class="text-end text-danger font-monospace fw-bold">${ventas}</td><td class="text-end font-monospace fw-bold ${stockActual<=0?'text-danger':''}">${stockActual}</td><td>${badgeAlerta}</td></tr>`;
    });
}

function renderSimulationOrderTable(filteredSales) {
    const tbody = document.querySelector('#tableSimulationOrder tbody'); if (!tbody) return;
    if (dtSimulationOrder) { dtSimulationOrder.destroy(); } tbody.innerHTML = '';
    const uniqueDates = [...new Set(DATABASE_STATE.map(r => r.fecha))]; const totalDiasReporte = Math.max(uniqueDates.length, 1);
    const ventasPorCodigo = {}; filteredSales.forEach(r => { ventasPorCodigo[r.rawCode] = (ventasPorCodigo[r.rawCode] || 0) + r.cantidad; });
    const comprasTotalesPorCodigo = {}; HISTORIAL_COMPRAS_LOTES.forEach(l => { comprasTotalesPorCodigo[l.rawCode] = (comprasTotalesPorCodigo[l.rawCode] || 0) + l.cantidad; });
    const diasCoberturaSugerida = parseInt(document.getElementById('simPeriodDays').value) || 7;
    Object.keys(DICCIONARIO_PRODUCTOS).forEach(code => {
        const p = DICCIONARIO_PRODUCTOS[code], totalVentasPeriodo = ventasPorCodigo[code] || 0, velocidadVentaDiaria = totalVentasPeriodo / totalDiasReporte, stockRequeridoFuturo = Math.ceil(velocidadVentaDiaria * diasCoberturaSugerida), totalComprasHistoricas = comprasTotalesPorCodigo[code] || 0, totalVentasHistoricas = DATABASE_STATE.filter(r => r.rawCode === code).reduce((sum, r) => sum + r.cantidad, 0), stockFisicoActual = Math.max(totalComprasHistoricas - totalVentasHistoricas, 0);
        let cantidadAComprar = stockRequeridoFuturo - stockFisicoActual; if (cantidadAComprar < 0) cantidadAComprar = 0;
        let badgeCritico = '<span class="badge bg-success">Stock Seguro</span>'; if (stockFisicoActual <= 0) badgeCritico = '<span class="badge bg-danger">Quiebre</span>'; else if (stockFisicoActual <= stockRequeridoFuturo * 0.5) badgeCritico = '<span class="badge bg-warning text-dark">Riesgo Alto</span>';
        tbody.innerHTML += `<tr><td class="font-monospace fw-bold">COD-${code}</td><td><strong>${p.nombre}</strong></td><td class="text-end font-monospace text-muted">${velocidadVentaDiaria.toFixed(2)} ud/d</td><td class="text-end font-monospace fw-bold">${stockRequeridoFuturo}</td><td class="text-end font-monospace text-info fw-bold">${stockFisicoActual}</td><td class="text-end font-monospace text-white fw-bold ${cantidadAComprar > 0 ? 'bg-success' : 'bg-secondary bg-opacity-25 text-dark'}">${cantidadAComprar}</td><td>${badgeCritico}</td></tr>`;
    });
    dtSimulationOrder = $('#tableSimulationOrder').DataTable({ destroy: true, pageLength: 10, dom: 'Bfrtip', buttons: [{ extend: 'excelHtml5', text: '<i class="fa-solid fa-file-excel me-1"></i> Generar Orden de Compra (Excel)', className: 'btn btn-info text-dark fw-bold btn-sm mt-2' }], order: [[5, 'desc']], language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' } });
}

function renderDataTableSection(data) {
    if (dtInstance) { dtInstance.clear(); dtInstance.rows.add(data); dtInstance.draw(); return; }
    dtInstance = $('#dtTransactions').DataTable({ data: data, columns: [ { data: 'fecha', defaultContent: "" }, { data: 'hora', defaultContent: "" }, { data: 'maquina', defaultContent: "" }, { data: 'codigo', defaultContent: "" }, { data: 'producto', defaultContent: "" }, { data: 'estado', defaultContent: "", render: () => `<span class="badge bg-success">ACEPTADA</span>` }, { data: 'pago', defaultContent: "" }, { data: 'cantidad', defaultContent: 0, className: 'text-end' }, { data: 'valor', defaultContent: 0, className: 'text-end', render: v => `S/ ${v.toFixed(2)}` } ], order: [[0, 'desc'], [1, 'desc']], pageLength: 10, dom: 'Bfrtip', buttons: [{ extend: 'excelHtml5', text: '<i class="fa-solid fa-file-excel me-1"></i> Exportar Ventas', className: 'btn btn-success btn-sm mt-2' }], language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' } });
}