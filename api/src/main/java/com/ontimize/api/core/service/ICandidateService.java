package com.ontimize.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ICandidateService {

	// CANDIDATE
	public EntityResult candidateQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult candidateInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult candidateUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult candidateDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

	// CANDIDATE CV
	public EntityResult candidateCVQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult candidateCVInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult candidateCVUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult candidateCVDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

}