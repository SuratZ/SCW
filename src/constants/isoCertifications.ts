// /d:/Coding/SCG/src/constants/isoCertifications.ts
//
// Notes:
// - Put plain constants and types in a .ts file. Use .tsx only if the file contains JSX.
// - Export named values so you can import them from .ts or .tsx files.
//
// Example imports:
// import { ISO_CERTIFICATIONS, getCertificationById } from 'src/constants/isoCertifications';
// // or using relative path:
// import { ISO_CERTIFICATIONS } from '../../constants/isoCertifications';

export type Certification = {
    id: string;
    name: string;
    code?: string;
    description?: string;
};

export const ISO_CERTIFICATIONS: ReadonlyArray<Certification> = [
    { id: 'ISO9001', name: 'ISO 9001:2015', code: '9001', description: 'Quality management systems' },
    { id: 'ISO14001', name: 'ISO 14001:2015', code: '14001', description: 'Environmental management systems' },
    { id: 'ISO27001', name: 'ISO/IEC 27001:2013', code: '27001', description: 'Information security management' },
];

/**
 * Helper: find certification by id (returns undefined if not found)
 */
export function getCertificationById(id: string): Certification | undefined {
    return ISO_CERTIFICATIONS.find(c => c.id === id);
}

/**
 * Helper: map to options for a select input
 */
export function mapToSelectOptions() {
    return ISO_CERTIFICATIONS.map(c => ({ value: c.id, label: c.name }));
}