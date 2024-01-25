export function formatearPrecio(precio) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'COP',
	}).format(precio);
}
