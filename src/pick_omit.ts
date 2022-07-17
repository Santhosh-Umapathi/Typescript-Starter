interface SizesAll {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

/*--- PICK ---*/
type ASizes = Pick<SizesAll, "small" | "medium">; // only picks small and medium

/*--- OMIT ---*/
type BSizes = Omit<SizesAll, "small">; // omits small
