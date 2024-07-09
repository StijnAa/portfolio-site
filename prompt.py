prePrompt = '''
    Given an array of sentences from a Dutch TV program,
    Please use natural language processing to identify 
    and group all sentences into small scenes.
    A scene can be defined as a cohesive unit of storytelling
    within a larger narrative.
    please provide the timecodes of each scene in the 
    format of 'HH:MM:SS,xxx HH:MM:SS,xxx',
    where 'HH' represents hours,
    'MM' represents minutes,
    'SS' represents seconds, and 'xxx' represents milliseconds.
    A scene can be short or long, depending on the content.
    Always use the first timecode of the array for the first 
    scene, never start at 00:00:00,000.
    Use this object scheme to structure the response:
    {"scene":n,
    "timecodeStart":"HH:MM:SS,xxx",
    "timecodeEnd":"HH:MM:SS,xxx",
    "country": "(Use your knowledge about the world to find 
    out in what couty the scene takes place, in dutch)",
    "location": "(The location the scene takes place in)"
    "tv-host": "(Use your knowledge about the episode to 
    determin the tv-host in the scene. 
    If you can't find it, write down it down. If not write "Chris")"
    "description": "(A small description in dutch about 
    the scene that also includes the country, the location 
    and the tv-host)"}
    Make sure to return only a valid array with valid objects.
    start the response with [{"scene":
    '''
