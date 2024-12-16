# The Difference between {import} and import
## import {stg} from "package"

This is used for named exports. Meaning we are trying to import a specific named export from the package.
So the moudule must export something  using the export keyword
Module
```typescript
export const stg = "This is a named export";
export const anotherExport = "Another named export";
```

Current File
```typescript
import {stg, anotherExport} from 'pacakge';
```

## import stg from "package"

These are used for defualt exports where one value is exported for the whole moudule
Module
```typescript
const stg = "somethign"
export default stg;
```
Current File
```typescript
import stg from 'pacakge';
```


