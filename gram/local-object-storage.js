// Prefix used to identify entries belonging to this storage system.
const LOCAL_STORAGE_BUCKET_PREFIX = "myApp:object-store:v1:";


/******************************************************************************
    Creates the actual localStorage key for a (type, lang) pair.
******************************************************************************/
function getLocalStorageBucketKey(inType, inLang)
{
    return LOCAL_STORAGE_BUCKET_PREFIX
        + encodeURIComponent(String(inType))
        + ":"
        + encodeURIComponent(String(inLang));
}


/******************************************************************************
    Reads a type/language bucket from localStorage.

    Returns:
        null      if the type/language does not exist.
        An object containing the stored keys and values otherwise.

    Throws an error if the stored JSON is invalid.
******************************************************************************/
function readLocalStorageBucket(inType, inLang)
{
    const storageKey = getLocalStorageBucketKey(inType, inLang);
    const json = localStorage.getItem(storageKey);

    if (json === null)
    {
        return null;
    }

    const parsed = JSON.parse(json);

    if (parsed === null ||
        typeof parsed !== "object" ||
        Array.isArray(parsed))
    {
        throw new Error("Invalid localStorage bucket: " + storageKey);
    }

    // Use an object without a prototype to safely handle keys such as
    // "__proto__".
    const bucket = Object.create(null);

    for (const key of Object.keys(parsed))
    {
        bucket[key] = parsed[key];
    }

    return bucket;
}


/******************************************************************************
    Returns an array of keys stored under the specified type and language.

    Returns:
        [] if the type/language does not exist.
******************************************************************************/
function getLocalStorageKeys(inType, inLang)
{
    const bucket = readLocalStorageBucket(inType, inLang);

    if (bucket === null)
    {
        return [];
    }

    return Object.keys(bucket);
}


/******************************************************************************
    Stores an object under (type, lang, key).

    Creates the type/language bucket if it does not already exist.

    The object must be JSON-serializable.
******************************************************************************/
function storeToLocalStorage(inType, inLang, inKey, inObject)
{
    const storageKey = getLocalStorageBucketKey(inType, inLang);
    const key = String(inKey);

    // Serialize first so unsupported top-level values, such as undefined
    // and functions, are rejected rather than silently omitted.
    const jsonObject = JSON.stringify(inObject);

    if (jsonObject === undefined)
    {
        throw new TypeError(
            "The supplied object cannot be stored as JSON."
        );
    }

    // Convert to a JSON-safe value.
    // This also ensures that only the serialized representation is stored.
    const storedObject = JSON.parse(jsonObject);

    let bucket = readLocalStorageBucket(inType, inLang);

    if (bucket === null)
    {
        bucket = Object.create(null);
    }

    bucket[key] = storedObject;

    localStorage.setItem(storageKey, JSON.stringify(bucket));
}


/******************************************************************************
    Retrieves an object stored under (type, lang, key).

    Returns:
        null if the type/language or key does not exist.
******************************************************************************/
function retrieveFromLocalStorage(inType, inLang, inKey)
{
    const bucket = readLocalStorageBucket(inType, inLang);

    if (bucket === null)
    {
        return null;
    }

    const key = String(inKey);

    if (!Object.prototype.hasOwnProperty.call(bucket, key))
    {
        return null;
    }

    return bucket[key];
}


/******************************************************************************
    Removes the specified (type, lang, key).

    If the last key is removed, the entire type/language entry is removed
    from localStorage.
******************************************************************************/
function removeFromLocalStorage(inType, inLang, inKey)
{
    const storageKey = getLocalStorageBucketKey(inType, inLang);
    const bucket = readLocalStorageBucket(inType, inLang);

    if (bucket === null)
    {
        return;
    }

    const key = String(inKey);

    if (!Object.prototype.hasOwnProperty.call(bucket, key))
    {
        return;
    }

    delete bucket[key];

    if (Object.keys(bucket).length === 0)
    {
        // No keys remain, so remove the entire type/language entry.
        localStorage.removeItem(storageKey);
    }
    else
    {
        localStorage.setItem(storageKey, JSON.stringify(bucket));
    }
}