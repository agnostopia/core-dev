export default {
	"check-coverage": true,
	"per-file": true,
	include: ["src/**/*.ts?(x)"],
	exclude: ["**/*.d.ts"],
	extension: [".ts", ".tsx"],
	require: ["esm", "ts-node/register"],
	reporter: ["text", "text-summary"],
	sourceMap: true,
	instrument: true,
	all: true,
};
