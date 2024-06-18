import { jsPDF } from "jspdf";

export function drawCharts() {
    var topSellingProductsData = new google.visualization.DataTable();
    topSellingProductsData.addColumn('string', 'Topping');
    topSellingProductsData.addColumn('number', 'Slices');
    topSellingProductsData.addRows([
        ['Game Over', 3],
        ['Ctrl + Eat', 1],
        ['Data Dinner', 1],
        ['No Cooler', 1],
        ['Coca-cola', 2]
    ]);

    var topSellingPaymentData = new google.visualization.DataTable();
    topSellingPaymentData.addColumn('string', 'Topping');
    topSellingPaymentData.addColumn('number', 'Slices');
    topSellingPaymentData.addRows([
        ['Pix', 3],
        ['Crédito', 1],
        ['Débito', 2],
        ['Dinheiro', 1],
    ]);
    var productsByCategoryData = new google.visualization.DataTable();
    productsByCategoryData.addColumn('string', 'Topping');
    productsByCategoryData.addColumn('number', 'Slices');
    productsByCategoryData.addRows([
        ['Lanches', 3],
        ['Combos', 1],
        ['Bebidas', 1],
        ['Sobremesas', 1],
    ]);
    var revenueByCategoryData = new google.visualization.DataTable();
    revenueByCategoryData.addColumn('string', 'Topping');
    revenueByCategoryData.addColumn('number', 'Slices');
    revenueByCategoryData.addRows([
        ['Lanches', 3],
        ['Combos', 1],
        ['Bebidas', 1],
        ['Sobremesas', 1],
    ]);
    var revenueByProductData = new google.visualization.DataTable();
    revenueByProductData.addColumn('string', 'Topping');
    revenueByProductData.addColumn('number', 'Slices');
    revenueByProductData.addRows([
        ['Game Over', 3],
        ['Ctrl + Eat', 1],
        ['Data Dinner', 1],
        ['No Cooler', 1],
        ['Coca-cola', 2]
    ]);

    /* TOP SELLING PRODUCTS */
    var topSellingProductsPiechart_options = {
        title:'Produtos mais vendidos',
        width:500,
        height:300,
        is3D: true
    };
    var topSellingProductsPiechart = new google.visualization.PieChart(document.getElementById('topsellingproductspiechart_div'));
    topSellingProductsPiechart.draw(topSellingProductsData, topSellingProductsPiechart_options);
    /* PDF GENERATOR */
    const bttnPDFOne = document.getElementById('pdf-chart-one')
    bttnPDFOne.addEventListener('click', function () {
        var doc = new jsPDF();
        doc.addImage(topSellingProductsPiechart.getImageURI(), 50, 0);
        doc.save('produtosMaisVendidos_grafico.pdf');
    }, false);

    /* TOP SELLING PAYMENT METHOD */
    var topSellingPaymentPiechart_options = {
        title:'Formas de pagamento mais utilizadas',
        width:500,
        height:300,
        is3D: true
    };
    var topSellingPaymentPiechart = new google.visualization.PieChart(document.getElementById('topsellingpaymentpiechart_div'));
    topSellingPaymentPiechart.draw(topSellingPaymentData, topSellingPaymentPiechart_options);
    /* PDF GENERATOR */
    const bttnPDFTwo = document.getElementById('pdf-chart-two')
    bttnPDFTwo.addEventListener('click', function () {
        var doc = new jsPDF();
        doc.addImage(topSellingPaymentPiechart.getImageURI(), 50, 0);
        doc.save('metodosPagamentoMaisUsados_grafico.pdf');
    }, false);

    /* PRODUCTS BY CATEGORY */
    var productsByCategoryPiechart_options = {
        title:'Quantidade de produtos por categoria',
        width:500,
        height:300,
        is3D: true
    };
    var productsByCategoryPiechart = new google.visualization.PieChart(document.getElementById('productsbycategorypiechart_div'));
    productsByCategoryPiechart.draw(productsByCategoryData, productsByCategoryPiechart_options);
    /* PDF GENERATOR */
    const bttnPDFThree = document.getElementById('pdf-chart-three')
    bttnPDFThree.addEventListener('click', function () {
        var doc = new jsPDF();
        doc.addImage(productsByCategoryPiechart.getImageURI(), 50, 0);
        doc.save('qtdProdutosCategoria_grafico.pdf');
    }, false);

    /* REVENUE BY CATEGORY */
/*     var revenueByCategoryPiechart_options = {
        title:'Receita por categoria',
        width:500,
        height:300,
        is3D: true
    };
    var revenueByCategoryPiechart = new google.visualization.PieChart(document.getElementById('revenuebycategorypiechart_div'));
    revenueByCategoryPiechart.draw(revenueByCategoryData, revenueByCategoryPiechart_options); */
    /* PDF GENERATOR */
/*     const bttnPDFFour = document.getElementById('pdf-chart-four')
    bttnPDFFour.addEventListener('click', function () {
        var doc = new jsPDF();
        doc.addImage(revenueByCategoryPiechart.getImageURI(), 0, 0);
        doc.save('receitaCategorias_grafico.pdf');
    }, false); */

    /* REVENUE BY PRODUCT */
    var revenueByProductPiechart_options = {
        title:'Receita por produto',
        width:500,
        height:300,
        is3D: true
    };
    var revenueByProductPiechart = new google.visualization.PieChart(document.getElementById('revenuebyproductpiechart_div'));
    revenueByProductPiechart.draw(revenueByProductData, revenueByProductPiechart_options);
    /* PDF GENERATOR */
    const bttnPDFFive = document.getElementById('pdf-chart-five')
    bttnPDFFive.addEventListener('click', function () {
        var doc = new jsPDF();
        doc.addImage(revenueByProductPiechart.getImageURI(), 50, 0);
        doc.save('receitaProdutos_grafico.pdf');
    }, false);
    
}
    