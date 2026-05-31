/**
 * @typedef {'milestone' | 'tip' | 'recipe' | 'moment' | 'struggle'} MemoryType
 */

/**
 * @typedef {Object} MemoryComment
 * @property {number} id
 * @property {string} text
 * @property {string} author
 * @property {string} timestamp
 */

/**
 * @typedef {Object} MemoryReactions
 * @property {number} heart
 * @property {number} celebrate
 * @property {number} support
 */

/**
 * @typedef {Object} Memory
 * @property {string} id
 * @property {MemoryType} type
 * @property {string} title
 * @property {string} content
 * @property {string} [babyAge]
 * @property {string[]} [tags]
 * @property {string} createdAt
 * @property {MemoryReactions} reactions
 * @property {MemoryComment[]} comments
 */

/**
 * @typedef {Object} Recipe
 * @property {string} id
 * @property {string} title
 * @property {string} [description]
 * @property {string} [videoUrl]
 * @property {string} [aiVideoUrl]
 * @property {string} [thumbnail]
 * @property {string} prepTime
 * @property {string} ageRange
 * @property {number} [ageMinMonths]
 * @property {string[]} ingredients
 * @property {string[]} steps
 * @property {string} [nutritionTip]
 * @property {string[]} tags
 * @property {'breakfast' | 'lunch' | 'snack'} [mealType]
 */

/**
 * @typedef {Object} ParentingTip
 * @property {string} id
 * @property {string} title
 * @property {string} tagline
 * @property {string} preview
 * @property {string} content
 * @property {string} ageRange
 * @property {number} [ageMinMonths]
 * @property {number} [ageMaxMonths]
 * @property {'health' | 'sleep' | 'feeding' | 'play'} category
 * @property {string[]} [tags]
 */

export {};
