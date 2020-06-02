export interface NycConfig {
	all?: boolean;
	"check-coverage"?: boolean;
	extension?: string[];
	include?: string[];
	exclude?: string[];
	reporter?: string[];
	"report-dir"?: string;
	"skip-full"?: boolean;
	"temp-dir"?: string;
	"per-file"?: boolean;

	readonly require?: string[];
	sourceMap?: boolean;
	instrument?: boolean;
}

export default {
	all: true,
	"check-coverage": true,
	"per-file": true,
	include: ["src/**"],
	require: ["ts-node/register"],
	reporter: ["text", "text-summary"],
	// SourceMap: true,
	// instrument: true,
};
